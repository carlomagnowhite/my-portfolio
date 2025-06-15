import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { Project } from '../../Interfaces/Project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ImageModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    Textarea,
    ReactiveFormsModule,
    ToastModule,
    TagModule,
    TooltipModule,
    ChipModule,
    DividerModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'E-commerce',
      subtitle: 'E-commerce',
      image: 'https://via.placeholder.com/150',
      description: 'E-commerce',
      technologies: [
        {
          name: 'Angular',
          color: '#DD0031'
        },
        {
          name: 'TypeScript',
          color: '#3178C6'
        }
      ],
      github: 'https://github.com/carlomagnowhite/e-commerce-angular',
      demo: 'https://carlomagnowhite.github.io/e-commerce-angular'
    },
    {
      name: 'E-commerce',
      subtitle: 'E-commerce',
      image: 'https://via.placeholder.com/150',
      description: 'E-commerce',
      technologies: [
        {
          name: 'Angular',
          color: '#DD0031'
        },
        {
          name: 'TypeScript',
          color: '#3178C6'
        },
        {
          name: 'HTML',
          color: '#E34F26'
        },
        {
          name: 'CSS',
          color: '#1572B6'
        }
      ],
      github: 'https://github.com/carlomagnowhite/e-commerce-angular',
      demo: 'https://carlomagnowhite.github.io/e-commerce-angular'
    }
  ];
}
