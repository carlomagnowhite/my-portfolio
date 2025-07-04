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
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, CommonModule, RouterModule, ToggleButtonModule, FormsModule, ToolbarModule, TooltipModule, MenuModule],
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

  getMenuOptions(){
    /*
    try {
      this.menuOptions = await this.supabaseService.getMenuOptions();
      this.transformMenuOptions();
    } catch (error) {
      console.error('Error al obtener las opciones del menú:', error);
    }*/
    this.menuOptions = [
      {
        id: 1,
        option_name: 'Home',
        icon: 'pi pi-home',
        url: '/'
      },
      {
        id: 2,
        option_name: 'About',
        icon: 'pi pi-user',
        url: '/about'
      },
      {
        id: 3,
        option_name: 'Projects',
        icon: 'pi pi-folder',
        url: '/projects'
      },
      {
        id: 4,
        option_name: 'Resume',
        icon: 'pi pi-file',
        url: '/resume'
      }
    ]
    this.transformMenuOptions();
  }

  transformMenuOptions() {
    if (this.menuOptions) {
      this.menuItems = this.menuOptions.map(option => ({
        label: option.option_name,
        icon: option.icon,
        routerLink: this.navbarResumeOrOthers( option.url ),
        command: () => {
          if (this.navbarResumeOrOthers(option.url) === true) {
            this.downloadPdfFromUrl();
          }
        }
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
    const url = 'https://drive.google.com/file/d/1tUWRRWu8fyhUNobI6RH68ligvLqfkBmy/view?usp=sharing';
    window.open(url, '_blank');
  }
}

