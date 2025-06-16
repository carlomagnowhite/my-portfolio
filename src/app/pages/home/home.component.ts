import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TimelineModule } from 'primeng/timeline';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { EventTimeLine } from '../../Interfaces/EventTimeLine.interface';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    TimelineModule,
    ImageModule,
    TagModule,
    DividerModule,
    TooltipModule,
  ],
  providers: [MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  visible: boolean = false;
  events: EventTimeLine[] = [];

  showDialog() {
    this.visible = true;
  }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }

  constructor() {
    this.events = [
      {
        date: '2025 March - Present',
        icon: 'pi pi-code',
        project: 'SISREC V2',
        position: 'Backend Developer',
        place: 'Empresa Eléctrica Ambato Regional Centro Norte S.A. (EEASA)',
        responsibilities: [
          'Client communication and requirements analysis',
          'API development in Spring Boot with Java',
          'Database design, optimization and implementation',
          'API documentation',
          'PL/SQL development in Oracle Database',
          'Web Socket implementation for notifications in real time',
          'Integration with external services in Angular',
        ],
        technologies: [
          { icon: 'devicon-spring-plain-wordmark', tooltip: 'Spring Boot', colored: true },
          { icon: 'devicon-java-plain-wordmark', tooltip: 'Java', colored: true },
          { icon: 'devicon-oracle-original', tooltip: 'Oracle Database', colored: true },
          { icon: 'devicon-socketio-original', tooltip: 'Socket.IO', colored: false },
          { icon: 'devicon-angular-plain', tooltip: 'Angular', colored: false }
        ],
      },
      {
        date: '2024 September - 2024 December',
        icon: 'pi pi-code',
        project: 'Electronic invoice microservice',
        position: 'Backend Developer',
        place: 'SAN VICENTE YACULOMA Y BELLAVISTA EL ROSARIO WATER MANAGEMENT GROUP',
        responsibilities: [
          'Invoice generation and management',
          'Invoice validation and approval',
          'Invoice mail notifications (PDF and XML)',
          'Sending electronic invoices to SRI servers to be validated',
        ],
        technologies: [
          { icon: 'devicon-javascript-plain', tooltip: 'JavaScript', colored: true },
          { icon: 'devicon-typescript-plain', tooltip: 'TypeScript', colored: true },
          { icon: 'devicon-nestjs-plain', tooltip: 'NestJS', colored: true }
        ],
      },
      {
        date: '2023 September - 2023 December',
        icon: 'pi pi-code',
        position: 'Backend Developer',
        place: 'Technical University of Ambato',
        project: 'Soccer tournament management system',
        responsibilities: [
          'Database design, administration and optimization',
          'PL/SQL development',
        ],
        technologies: [
          { icon: 'devicon-typescript-plain', tooltip: 'TypeScript', colored: true },
          { icon: 'devicon-postgresql-plain-wordmark', tooltip: 'PostgreSQL', colored: true },
          { icon: 'devicon-supabase-plain', tooltip: 'Supabase', colored: true }
        ],
      },
      {
        date: '2023 April - 2023 June',
        icon: 'pi pi-code',
        position: 'Frontend Developer',
        place: 'Technical University of Ambato',
        project: 'FISEI - Centro de transferencia tecnológica courses information web page',
        responsibilities: [
          'Web page design and development',
          'Web page maintenance and updates',
        ],
        technologies: [
          { icon: 'devicon-html5-plain', tooltip: 'HTML5', colored: true },
          { icon: 'devicon-css3-plain', tooltip: 'CSS3', colored: true },
          { icon: 'devicon-bootstrap-plain', tooltip: 'Bootstrap', colored: true },
          { icon: 'devicon-javascript-plain', tooltip: 'JavaScript', colored: true },
          { icon: 'devicon-php-plain', tooltip: 'PHP', colored: true }
        ],
      },
    ];
  }
}
