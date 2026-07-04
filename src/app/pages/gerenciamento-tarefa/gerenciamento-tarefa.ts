import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gerenciamento-tarefa',
  imports: [FormsModule],
  templateUrl: './gerenciamento-tarefa.html',
  styleUrl: './gerenciamento-tarefa.css',
})
export class GerenciamentoTarefa {

  tarefas: String[] = [];
  datasLimites: String[] = [];
  status:String[] = [];

  tarefa:String = "";
  dataLimite:String = "";
  statu: String = "";

  idEditar: number = -1


  salvar(): void{

    if(this.idEditar === -1){
      this.cadastrar()
    }else{
      this.editar()
    }

    this.tarefa = ""
    this.statu = ""
    this.dataLimite = ""

  }


  cadastrar(): void{
    this.tarefas.push(this.tarefa)
    this.datasLimites.push(this.dataLimite)
    this.status.push(this.statu)

    alert("Tarefa cadastrada com sucesso")
  }


  editar(): void{
    this.tarefas[this.idEditar] = this.tarefa
    this.status[this.idEditar] = this.statu
    this.datasLimites[this.idEditar] = this.dataLimite
  }

  apagar(nomeTarefa: String): void{
    let apagar = confirm("Deseja realmente apagar")
    let indiceTarefa = this.tarefas.indexOf(nomeTarefa)

    if(apagar === true){
      this.tarefas.splice(indiceTarefa, 1);
      this.datasLimites.splice(indiceTarefa, 1);
      this.status.splice(indiceTarefa, 1);
    }

    
  }

  preencherParaEditar(nomeTarefa: String, dataTarefa: String, statusTarefa: String):void {
    this.idEditar = this.tarefas.indexOf(nomeTarefa)

    this.tarefa = nomeTarefa
    this.statu = dataTarefa
    this.dataLimite = dataTarefa

  }

}
