import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarConfig } from './sidebar-config/sidebar-config';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [RouterLink, SidebarConfig],
  templateUrl: './configuracao.html',
  styleUrl: './configuracao.css'
})
export class Configuracao {

  constructor(private themeService: ThemeService) {}

  alterarTema(): void {
    this.themeService.toggleTheme();
  }

}