import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { SidebarComponent } from "./sidebar/sidebar/sidebar";
// import { TopbarComponent } from "./topbar/topbar/topbar";
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-orbit');
  constructor(private themeService: ThemeService) { }

}
