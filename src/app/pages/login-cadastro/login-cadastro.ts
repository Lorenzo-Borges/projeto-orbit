import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-cadastro',
  imports: [RouterLink],
  templateUrl: './login-cadastro.html',
  styleUrl: './login-cadastro.css',
})
export class LoginCadastro {

  constructor( private router: Router){}

    mostrarCadastro = false;
  
  
    trocarTela() {
      this.mostrarCadastro = !this.mostrarCadastro;
    }

    logar(){
      this.router.navigate(["./home"])
    }

    cadastrar(){
      this.router.navigate(["./home"])
    }
  
  
}
