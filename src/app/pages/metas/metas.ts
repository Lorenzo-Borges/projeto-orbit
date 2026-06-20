import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MetasService } from '../../services/metas.service';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [RouterLink, FormsModule, DatePipe],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class MetasComponent {
  private metasService = inject(MetasService);

  nomeMeta: string = '';
  descricaoMeta: string = '';
  dataVencimento: string = '';

  get listaMetas() {
    return this.metasService.getMetas();
  }

  adicionarMeta() {
    if (!this.nomeMeta.trim()) return;

    this.metasService.adicionar({
      nome: this.nomeMeta,
      descricao: this.descricaoMeta,
      dataVencimento: this.dataVencimento
    });

    this.nomeMeta = '';
    this.descricaoMeta = '';
    this.dataVencimento = '';
  }

  editarMeta(id: number) {
    const meta = this.listaMetas.find(m => m.id === id);
    if (meta) {
      this.nomeMeta = meta.nome;
      this.descricaoMeta = meta.descricao;
      this.dataVencimento = meta.dataVencimento;
      
      this.excluirMeta(id); 
    }
  }

  excluirMeta(id: number) {
  const confirmacao = confirm("Tem certeza que deseja excluir esta meta? Esta ação não pode ser desfeita.");
  if (confirmacao) {
    this.metasService.excluir(id); 
  }
}
}