import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { createClient } from '@supabase/supabase-js';
import { MenuOptions } from '../Interfaces/MenuOptions.interface';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() { }

  private supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  async getMenuOptions(): Promise<MenuOptions[]> {
    const { data, error } = await this.supabase.from('menu-options').select('*');
    if (error) throw error;
    return data;
  }
}
