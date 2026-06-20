export interface Financeiro {
    id: number;
    descricao: string;
    valor: number;
    dataVencimento: string;
    status: 'PAGO' | 'PENDENTE';
    tipo: 'RECEITA' | 'DESPESA';
}
