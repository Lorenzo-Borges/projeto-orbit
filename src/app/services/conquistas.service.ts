import { Injectable } from '@angular/core';

export interface Conquista {
    id: number;
    titulo: string;
    descricao: string;
    desbloqueada: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ConquistasService {
    private listaConquistas: Conquista[] = [
        { id: 1, titulo: 'Iniciando', descricao: 'Primeira meta de muitas a serem cumpridas.', desbloqueada: false },
        { id: 2, titulo: 'Organizado', descricao: 'Muito bem, você chegou à marca de 10 metas concluídas. Seu esforço será recompensado.!', desbloqueada: false },
        { id: 3, titulo: 'Try Hard', descricao: 'Parabéns, você chegou à marca de 20 metas concluídas. Continue o bom trabalho.', desbloqueada: false },
        { id: 4, titulo: 'Viciado em Conquistar', descricao: 'Sensacional, você chegou à marca de 50 metas concluídas. Impressionante.', desbloqueada: false },
        { id: 5, titulo: 'O Mestre das Metas', descricao: 'Você é bizarro, chegou à marca de 100 metas concluídas. Insano.', desbloqueada: false },
        { id: 6, titulo: 'Enchendo o cofrinho', descricao: 'Iniciando a jornada rumo à estabilidade financeira.', desbloqueada: false },
        { id: 7, titulo: 'Poupador', descricao: 'Já dá para começar a sentir a mudança de vida.', desbloqueada: false },
        { id: 8, titulo: 'Mão de Vaca', descricao: 'Agora é hora de resistir às tentações.', desbloqueada: false },
        { id: 9, titulo: 'Tio Patinhas', descricao: 'Parabéns, poucos chegam tão longe.', desbloqueada: false },
        { id: 10, titulo: 'Toque de Midas', descricao: 'Você é um verdadeiro poupador. Incrível!', desbloqueada: false },
    ];
}