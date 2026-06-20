import { Injectable } from '@angular/core';
import { Meta } from '../models/meta.model';

@Injectable({ providedIn: 'root' })
export class MetasService {
  private metas: Meta[] = [];

  getMetas() {
    return this.metas;
  }

  adicionar(meta: Omit<Meta, 'id' | 'concluida'>) {
    const novaMeta: Meta = {
      ...meta,
      id: Date.now(),
      concluida: false
    };
    this.metas.push(novaMeta);
  }

  excluir(id: number) {
    this.metas = this.metas.filter(m => m.id !== id);
  }
}