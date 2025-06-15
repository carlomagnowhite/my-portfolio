import { Component, Inject, inject, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { SupabaseService } from '../../services/supabase.service';
import { MenuOptions } from '../../Interfaces/MenuOptions.interface';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, CommonModule, RouterModule, ToggleButtonModule, FormsModule, ToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  dark:boolean = false;
  menuItems: MenuItem[] = [];
  menuOptions: MenuOptions[] | undefined;
  supabaseService = inject(SupabaseService);
  router = inject(Router);

  ngOnInit(): void {
    this.getMenuOptions();
    const saved = localStorage.getItem('darkMode');
    this.dark = saved === 'true';
    this.document.documentElement.classList.toggle('dark-theme', this.dark);
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleDark() {
    this.dark = !this.dark;
    const html = this.document.documentElement;
    html.classList.toggle('dark-theme', this.dark);
    localStorage.setItem('darkMode', this.dark.toString());
  }

  async getMenuOptions(){
    try {
      this.menuOptions = await this.supabaseService.getMenuOptions();
      this.transformMenuOptions();
      console.log('Opciones originales:', this.menuOptions);
      console.log('Opciones transformadas:', this.menuItems);
    } catch (error) {
      console.error('Error al obtener las opciones del menú:', error);
    }
  }

  transformMenuOptions() {
    if (this.menuOptions) {
      this.menuItems = this.menuOptions.map(option => ({
        label: option.option_name,
        icon: option.icon,
        routerLink: this.navbarResumeOrOthers( option.url ),
        command: () => this.navbarResumeOrOthers( option.url ) === true ? this.downloadPdfFromUrl() : null
      }));
    }
  }

  navbarResumeOrOthers(url: string){
    if(url === '/resume'){
      return true;
    }
    return url;
  }

  downloadPdfFromUrl() {
    const url = 'https://drive.google.com/file/d/10F379z8mnDuqibvdY6cZOf7vfuG1fU3v/view?usp=sharing';
    window.open(url, '_blank');
  }
}

