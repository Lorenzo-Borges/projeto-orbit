import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  dataVencimento: string;
  tipo: 'RECEITA' | 'DESPESA';
  status: 'PAGO' | 'PENDENTE';
}

@Component({
  selector: 'app-financeiro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './financeiro.html',
  styleUrls: ['./financeiro.css']
})
export class FinanceiroComponent {
  
  // Controle do Modal e Edição
  exibirModal: boolean = false;
  idEdicao: number | null = null;

  // Campos do Formulário
  descricaoTransacao: string = '';
  valorTransacao: number | null = null;
  dataTransacao: string = '';
  tipoTransacao: 'RECEITA' | 'DESPESA' = 'RECEITA';
  statusTransacao: 'PAGO' | 'PENDENTE' = 'PAGO';

  // Lista de Transações de Exemplo
  listaFinanceiro: Transacao[] = [
    { id: 1, descricao: 'Salário', valor: 3500.00, dataVencimento: '2026-07-05', tipo: 'RECEITA', status: 'PAGO' },
    { id: 2, descricao: 'Aluguel', valor: 1200.00, dataVencimento: '2026-07-10', tipo: 'DESPESA', status: 'PENDENTE' }
  ];

  // Getters para os Cards de Resumo e Dashboard
  get totalReceitas(): number {
    return this.listaFinanceiro
      .filter(t => t.tipo === 'RECEITA')
      .reduce((acc, t) => acc + t.valor, 0);
  }

  get totalDespesas(): number {
    return this.listaFinanceiro
      .filter(t => t.tipo === 'DESPESA')
      .reduce((acc, t) => acc + t.valor, 0);
  }

  get saldoFinanceiro(): number {
    return this.totalReceitas - this.totalDespesas;
  }

  // ===== Métodos de Controle do Modal =====

  abrirModalNovo() {
    this.limparFormulario();
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
    this.limparFormulario();
  }

  // ===== Ações do Formulário =====

  salvarTransacao() {
    if (!this.descricaoTransacao || !this.valorTransacao || !this.dataTransacao) {
      return;
    }

    if (this.idEdicao) {
      // Edição de transação existente
      const index = this.listaFinanceiro.findIndex(t => t.id === this.idEdicao);
      if (index !== -1) {
        this.listaFinanceiro[index] = {
          id: this.idEdicao,
          descricao: this.descricaoTransacao,
          valor: Number(this.valorTransacao),
          dataVencimento: this.dataTransacao,
          tipo: this.tipoTransacao,
          status: this.statusTransacao
        };
      }
    } else {
      // Criação de nova transação
      const novaTransacao: Transacao = {
        id: Date.now(),
        descricao: this.descricaoTransacao,
        valor: Number(this.valorTransacao),
        dataVencimento: this.dataTransacao,
        tipo: this.tipoTransacao,
        status: this.statusTransacao
      };
      this.listaFinanceiro.push(novaTransacao);
    }

    this.fecharModal();
  }

  editarTransacao(item: Transacao) {
    this.idEdicao = item.id;
    this.descricaoTransacao = item.descricao;
    this.valorTransacao = item.valor;
    this.dataTransacao = item.dataVencimento;
    this.tipoTransacao = item.tipo;
    this.statusTransacao = item.status;
    this.exibirModal = true;
  }

  excluirTransacao(id: number) {
    this.listaFinanceiro = this.listaFinanceiro.filter(t => t.id !== id);
  }

  limparFormulario() {
    this.idEdicao = null;
    this.descricaoTransacao = '';
    this.valorTransacao = null;
    this.dataTransacao = '';
    this.tipoTransacao = 'RECEITA';
    this.statusTransacao = 'PAGO';
  }
}