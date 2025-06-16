import { Component, inject, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TechStack } from '../../Interfaces/TechStack.interface';
import { TooltipModule } from 'primeng/tooltip';
import GitHubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css';

@Component({
  selector: 'app-about',
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
    TooltipModule
  ],
  providers: [MessageService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  techStack: TechStack[] = [
    { icon: 'devicon-spring-plain-wordmark', tooltip: 'Spring Boot', colored: true },
    { icon: 'devicon-java-plain-wordmark', tooltip: 'Java', colored: true },
    { icon: 'devicon-nestjs-plain', tooltip: 'NestJS', colored: true },
    { icon: 'devicon-typescript-plain', tooltip: 'TypeScript', colored: true },
    { icon: 'devicon-javascript-plain', tooltip: 'JavaScript', colored: true },
    { icon: 'devicon-postgresql-plain-wordmark', tooltip: 'PostgreSQL', colored: true },
    { icon: 'devicon-mysql-plain-wordmark', tooltip: 'MySQL', colored: true },
    { icon: 'devicon-oracle-plain', tooltip: 'Oracle', colored: true },
    { icon: 'devicon-docker-plain-wordmark', tooltip: 'Docker', colored: true },
    { icon: 'devicon-git-plain-wordmark', tooltip: 'Git', colored: true },
    { icon: 'devicon-github-plain', tooltip: 'GitHub', colored: false },
    { icon: 'devicon-gitlab-plain-wordmark', tooltip: 'GitLab', colored: true },
    { icon: 'devicon-angular-plain', tooltip: 'Angular', colored: false },
    { icon: 'devicon-html5-plain-wordmark', tooltip: 'HTML5', colored: true },
    { icon: 'devicon-css3-plain-wordmark', tooltip: 'CSS3', colored: true },
    { icon: 'devicon-supabase-plain', tooltip: 'Supabase', colored: true },
  ];
  visible: boolean = false;
  position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  emailService: EmailService = inject(EmailService);
  contactForm: FormGroup;
  messageService: MessageService = inject(MessageService);
  githubCalendar: any;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      GitHubCalendar('#calendar', 'carlomagnowhite', {
        responsive: true,
        global_stats: false,
        tooltips: true
      });
    }
  }

  showDialog(position: 'top' | 'bottom' | 'left' | 'right') {
    this.visible = true;
    this.position = position;
  }

  hideDialog() {
    this.visible = false;
    this.clearForm();
  }

  sendEmail() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).then((result) => {
        if (result) {
          this.showSuccess('Email sent successfully!');
        } else {
          this.showError('Error sending email');
        }
      });
      this.clearForm();
      this.hideDialog();
    } else {
      this.showError('Please, complete this form correctly!');
    }
  }

  clearForm() {
    this.contactForm.reset();
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000
    });
  }

  downloadPdfFromUrl() {
    const url = 'https://drive.google.com/file/d/1tUWRRWu8fyhUNobI6RH68ligvLqfkBmy/view?usp=sharing';
    window.open(url, '_blank');
  }

  // Método para obtener los errores de validación
  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.hasError('required')) {
      this.showError('This field is required!');
      return '';
    }
    if (control?.hasError('email')) {
      this.showError('Email field is not valid.');
      return '';
    }
    if (control?.hasError('minlength')) {
      this.showError('Message field is too short.');
      return '';
    }
    return '';
  }

  // Método para verificar si un campo es válido
  isFieldInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? (control.invalid && (control.dirty || control.touched)) : false;
  }
}
