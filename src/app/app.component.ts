import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DOCUMENT } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dark:boolean = false;
  title = 'my-portfolio';

  constructor(private primeng: PrimeNG, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
  }

  toggleDark() {
    this.dark = !this.dark;
    const html = this.document.documentElement;
    html.classList.toggle('dark-theme', this.dark);
  }
}
