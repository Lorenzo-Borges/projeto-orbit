import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Financeiro {
  id: number;
  descricao: string;
  valor: number;
  dataVencimento: string;
  status: 'PAGO' | 'PENDENTE';
  tipo: 'RECEITA' | 'DESPESA';
}

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {
  private listaFinanceiro: Financeiro[] = [
    { id: 1, descricao: 'Salário Mensal', valor: 5000, dataVencimento: '2026-06-05', status: 'PAGO', tipo: 'RECEITA' },
    { id: 2, descricao: 'Aluguel', valor: 1500, dataVencimento: '2026-06-10', status: 'PENDENTE', tipo: 'DESPESA' }
  ];

  private financeiroSubject = new BehaviorSubject<Financeiro[]>(this.listaFinanceiro);
  financeiro$ = this.financeiroSubject.asObservable();

  adicionar(item: Omit<Financeiro, 'id'>) {
    const novoItem: Financeiro = { ...item, id: Date.now() };
    this.listaFinanceiro.push(novoItem);
    this.financeiroSubject.next([...this.listaFinanceiro]);
  }

  // NOVO: Método para atualizar uma transação existente
  atualizar(itemAtualizado: Financeiro) {
    const index = this.listaFinanceiro.findIndex(item => item.id === itemAtualizado.id);
    if (index !== -1) {
      this.listaFinanceiro[index] = itemAtualizado;
      this.financeiroSubject.next([...this.listaFinanceiro]); // Emite a nova lista, atualizando os cards!
    }
  }

  excluir(id: number) {
    this.listaFinanceiro = this.listaFinanceiro.filter(item => item.id !== id);
    this.financeiroSubject.next([...this.listaFinanceiro]);
  }
}