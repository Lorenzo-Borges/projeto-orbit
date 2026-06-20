import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarConfig } from "./sidebar-config/sidebar-config";

@Component({
  selector: 'app-configuracao',
  imports: [RouterLink, SidebarConfig],
  templateUrl: './configuracao.html',
  styleUrl: './configuracao.css',
})
export class Configuracao {}
