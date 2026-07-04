import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { FinanceiroService, Financeiro } from '../../services/financeiro.service';

@Component({
  selector: 'app-financeiro',
  standalone: true,
  imports: [FormsModule, DatePipe, CurrencyPipe],
  templateUrl: './financeiro.html',
  styleUrl: './financeiro.css'
})

export class FinanceiroComponent implements OnInit {
  listaFinanceiro: Financeiro[] = [];

  idEdicao: number | null = null;
  descricaoTransacao: string = '';
  valorTransacao: number | null = null;
  dataTransacao: string = '';
  tipoTransacao: 'RECEITA' | 'DESPESA' = 'DESPESA';
  statusTransacao: 'PAGO' | 'PENDENTE' = 'PENDENTE';

  constructor(private financeiroService: FinanceiroService) { }

  ngOnInit() {
    this.financeiroService.financeiro$.subscribe(dados => {
      this.listaFinanceiro = dados;
    });
  }

  salvarTransacao() {
    if (!this.descricaoTransacao || !this.valorTransacao || !this.dataTransacao) return;

    const transacao = {
      descricao: this.descricaoTransacao,
      valor: this.valorTransacao,
      dataVencimento: this.dataTransacao,
      tipo: this.tipoTransacao,
      status: this.statusTransacao
    };

    if (this.idEdicao) {
      this.financeiroService.atualizar({ id: this.idEdicao, ...transacao });
    } else {
      this.financeiroService.adicionar(transacao);
    }

    this.limparFormulario();
  }

  editarTransacao(item: Financeiro) {
    this.idEdicao = item.id;
    this.descricaoTransacao = item.descricao;
    this.valorTransacao = item.valor;
    this.dataTransacao = item.dataVencimento;
    this.tipoTransacao = item.tipo;
    this.statusTransacao = item.status;
  }

  excluirTransacao(id: number) {
    if (confirm("Tem certeza que deseja excluir esta transação?")) {
      this.financeiroService.excluir(id);
    }
  }

  limparFormulario() {
    this.idEdicao = null;
    this.descricaoTransacao = '';
    this.valorTransacao = null;
    this.dataTransacao = '';
    this.tipoTransacao = 'DESPESA';
    this.statusTransacao = 'PENDENTE';
  }

  get totalReceitas(): number {
    return this.listaFinanceiro.filter(i => i.tipo === 'RECEITA').reduce((acc, i) => acc + i.valor, 0);
  }

  get totalDespesas(): number {
    return this.listaFinanceiro.filter(i => i.tipo === 'DESPESA').reduce((acc, i) => acc + i.valor, 0);
  }

  get saldoFinanceiro(): number {
    return this.totalReceitas - this.totalDespesas;
  }
}