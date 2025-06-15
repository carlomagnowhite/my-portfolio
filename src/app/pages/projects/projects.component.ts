import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { Project } from '../../Interfaces/Project.interface';
import { TechStack } from '../../Interfaces/TechStack.interface';

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
    TextareaModule,
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
      name: 'CTT-FISEI TECH COURSE WEBSITE',
      subtitle: 'Website',
      image: '/assets/images/p1.png',
      description: 'This website was developed with idea to offer a website to the tech course of FISEI UTA. One of my first projects in web development.',
      demoToolTip: 'View demo',
      githubToolTip: 'View github',
      technologies: [
        {
          tooltip: 'HTML5',
          icon: 'devicon-html5-plain',
          colored: true
        },
        {
          tooltip: 'CSS3',
          icon: 'devicon-css3-plain',
          colored: true
        },
        {
          tooltip: 'JavaScript',
          icon: 'devicon-javascript-plain',
          colored: true
        },
        {
          tooltip: 'Bootstrap',
          icon: 'devicon-bootstrap-plain',
          colored: true
        },
        {
          tooltip: 'PHP',
          icon: 'devicon-php-plain',
          colored: true
        }
      ],
      github: 'https://github.com/carlomagnowhite/PROYECT2_MYCS',
      demo: 'https://ctt-talleresfisei.uta.edu.ec/'
    },
    {
      name: 'FISEI CUP 2025 - WEBSITE',
      subtitle: 'Website',
      image: '/assets/images/p2.png',
      description: 'This website was developed with idea to offer a website to the FISEI CUP 2025. This website was developed with Angular and TypeScript.',
      demoToolTip: 'View demo',
      githubToolTip: 'I was backend developer in this project',
      technologies: [
        {
          tooltip: 'TypeScript',
          icon: 'devicon-typescript-plain',
          colored: true
        },
        {
          tooltip: 'PostgreSQL',
          icon: 'devicon-postgresql-plain',
          colored: true
        },
        {
          tooltip: 'Supabase',
          icon: 'devicon-supabase-plain',
          colored: true
        }
      ],
      github: 'https://github.com/carlomagnowhite',
      demo: 'https://copa-fisei-2025.vercel.app/ranking'
    },
    {
      name: 'ELECTRONIC INVOICING THROUGH API - MICROSERVICE FOR DRINKING WATER MANAGEMENT ORGANIZATION AMBATO',
      subtitle: 'Microservice API',
      image: '/assets/images/p3.png',
      description: 'This microservice was developed with idea to offer a microservice to the Electronic Invoicing. This microservice was developed with NestJS and TypeScript.',
      demoToolTip: 'This is a microservice that is not public and it can be use only for the clients of the organization',
      githubToolTip: 'This repository is private due to copyright reasons',
      technologies: [
        {
          tooltip: 'TypeScript',
          icon: 'devicon-typescript-plain',
          colored: true
        },
        {
          tooltip: 'NestJS',
          icon: 'devicon-nestjs-plain',
          colored: true
        },
        {
          tooltip: 'JavaScript',
          icon: 'devicon-javascript-plain',
          colored: true
        }
      ],
      github: '#',
      demo: '#'
    },
    {
      name: 'INTERNAL AUDIT RECOMMENDATION SYSTEM - BACKEND DEVELOPER',
      subtitle: 'Web Application',
      image: '/assets/images/p4.png',
      description: 'I was involved in this project as a backend developer. I made emails, notifications and dashboards modules. Principally I worked with spring boot - java and PL/SQL in Oracle.',
      demoToolTip: 'This is a project that is not public and it can be use only for the clients of the organization',
      githubToolTip: 'This repository is private due to copyright reasons',
      technologies: [
        {
          tooltip: 'Java',
          icon: 'devicon-java-plain',
          colored: true
        },
        {
          tooltip: 'Spring Boot',
          icon: 'devicon-spring-plain',
          colored: true
        },
        {
          tooltip: 'Oracle',
          icon: 'devicon-oracle-plain',
          colored: true
        }
      ],
      github: '#',
      demo: '#'
    },

    {
      name: 'MY PORTFOLIO',
      subtitle: 'Website',
      image: '/assets/images/p5.png',
      description: 'This is my portfolio website. I made this website with Angular in its 19th version. I made this website to show my skills and projects.',
      demoToolTip: 'View demo',
      githubToolTip: 'View github',
      technologies: [
        {
          tooltip: 'Angular',
          icon: 'devicon-angular-plain',
          colored: false
        },
        {
          tooltip: 'TypeScript',
          icon: 'devicon-typescript-plain',
          colored: true
        }
      ],
      github: 'https://github.com/carlomagnowhite/my-portfolio',
      demo: 'http://localhost:4200'
    }

  ];
}
