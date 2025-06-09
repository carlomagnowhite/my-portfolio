import { Component, inject, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { SupabaseService } from '../../services/supabase.service';
import { MenuOptions } from '../../Interfaces/MenuOptions.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] = [];
  menuOptions: MenuOptions[] | undefined;
  supabaseService = inject(SupabaseService);
  router = inject(Router);

  ngOnInit(): void {
    this.getMenuOptions();
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
        icon: this.getIconForOption(option.option_name),
        routerLink: [option.url.replace('/', '')]
      }));
    }
  }

  private getIconForOption(optionName: string): string {
    const iconMap: { [key: string]: string } = {
      'Home': 'pi pi-home',
      'Projects': 'pi pi-folder',
      'Resume': 'pi pi-file',
      'About': 'pi pi-user'
    };
    return iconMap[optionName] || '';
  }
}

