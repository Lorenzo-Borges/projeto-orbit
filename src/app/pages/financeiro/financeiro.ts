import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Financeiro {
    id: number;
    descricao: string;
    valor: number;
    dataVencimento: string;
    status: 'PAGO' | 'PENDENTE';
    tipo: 'RECEITA' | 'DESPESA';
}


@Component({
  selector: 'app-financeiro',
  standalone: true,
  imports: [FormsModule, DatePipe, CurrencyPipe],
  templateUrl: './financeiro.html',
  styleUrl: './financeiro.css',
})

export class FinanceiroComponent {

  listaFinanceiro: Financeiro[] = [
    { id: 1, descricao: 'Salario mensal', valor: 2500, dataVencimento: '2026-06-05', status: 'PAGO', tipo: 'RECEITA' },
    { id: 2, descricao: 'Aluguel', valor: 1500, dataVencimento: '2026-06-10', status: 'PENDENTE', tipo: 'DESPESA' },
    { id: 2, descricao: 'Internet', valor: 150, dataVencimento: '2026-06-11', status: 'PENDENTE', tipo: 'DESPESA' }
  ];

  get totalReceitas(): number {
    return this.listaFinanceiro.filter(item => item.tipo === 'RECEITA').reduce((acc, item) => acc + item.valor, 0);
  }

  get totalDespesas(): number {
    return this.listaFinanceiro.filter(item => item.tipo === 'DESPESA').reduce((acc, item) => acc + item.valor, 0);
  }

  get saldoFinanceiro(): number {
    return this.totalReceitas - this.totalDespesas;
  }
}

