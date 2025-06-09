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
    DividerModule
  ],
  providers: [MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible: boolean = false;
  events: EventTimeLine[] = [];

  showDialog() {
    this.visible = true;
  }

  constructor() {
    this.events = [
        {
          date: '2025 - Present',
          icon: 'pi pi-shopping-cart',
          color: '#9C27B0',
          position: 'Software Engineer',
          place: 'Cibertec',
          responsibilities: ['Development of software solutions', 'Development of software solutions', 'Development of software solutions'],
          technologies: ['Angular', 'Node.js', 'MongoDB']
        },
        {
          date: '2023 September - 2023 December',
          icon: 'pi pi-code',
          position: 'Backend Developer',
          place: 'Technical University of Ambato',
          project: 'Soccer tournament management system',
          responsibilities: ['Database design, administration and optimization', 'PL/SQL development'],
          technologies: ['TypeScript', 'PostgreSQL', 'PL/SQL']
        },
        {
          date: '2023 April - 2023 June',
          icon: 'pi pi-code',
          position: 'Frontend Developer',
          place: 'Technical University of Ambato',
          project: 'FISEI - Centro de transferencia tecnológica courses information web page',
          responsibilities: ['Web page design and development', 'Web page maintenance and updates'],
          technologies: ['HTML', 'CSS - Bootstrap', 'JavaScript', 'PHP']
        }
    ];
  }
}
