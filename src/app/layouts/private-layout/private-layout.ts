import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from '../../sidebar/sidebar/sidebar';
import { TopbarComponent } from '../../topbar/topbar/topbar';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.css',
})
export class PrivateLayoutComponent {}
