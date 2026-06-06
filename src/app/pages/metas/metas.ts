import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-metas',
  imports: [RouterLink],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class MetasComponent {
  nomeMeta: string = '';
  descricaoMeta: string = '';
  dataVencimento: string = '';
  
  adicionarMeta() {
    
    // Lógica para adicionar uma nova meta
    
  }

  editarMeta(id: number) {
    // Lógica para editar uma meta existente
  }

  excluirMeta(id: number) {
    // Lógica para excluir uma meta
  }
}
