import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Financeiro } from "../pages/financeiro/financeiro";

@Injectable({
        providedIn: 'root'
})
export class FinanceiroService {
    listaFinanceiro: Financeiro[] = [
        { id: 1, descricao: 'Salario Mensal', valor: 2500, dataVencimento: '2026-06-10', status: 'PAGO', tipo: 'RECEITA'},
        { id: 2, descricao: 'Aluguel', valor: 1500, dataVencimento: '2026-06-11', status: 'PENDENTE', tipo: 'DESPESA'},
        { id: 3, descricao: 'Internet', valor: 150, dataVencimento: '2026-06-15', status: 'PENDENTE', tipo: 'DESPESA'}

    ];

    private financeiroSubject = new BehaviorSubject<Financeiro[]>(this.listaFinanceiro);

    financeiro$ = this.financeiroSubject.asObservable();

    constructor() { }

    adicionar(item: Omit<Financeiro, 'id'>) {
        const novoItem: Financeiro = {
            ...item,
            id: Date.now()
        };
        this.listaFinanceiro.push(novoItem);
        this.financeiroSubject.next([...this.listaFinanceiro]);
    }

    excluir(id: number){
        this.listaFinanceiro = this.listaFinanceiro.filter(item => item.id !== id);
        this.financeiroSubject.next([...this.listaFinanceiro]);
    }
}