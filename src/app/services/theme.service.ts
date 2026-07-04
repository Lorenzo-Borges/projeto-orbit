import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly STORAGE_KEY = 'theme';

  constructor() {
    debugger
    this.loadTheme();
  }

  toggleTheme(): void {
    debugger
    const currentTheme = this.getCurrentTheme();
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';

    this.setTheme(newTheme);
    
  }

  setTheme(theme: Theme): void {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  getCurrentTheme(): Theme {
    return (localStorage.getItem(this.STORAGE_KEY) as Theme) || 'light';
  }

  private loadTheme(): void {
    const savedTheme = this.getCurrentTheme();
    this.setTheme(savedTheme);
  }

}