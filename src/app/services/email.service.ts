import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'service_matt_diaz_gmail';
  private readonly TEMPLATE_ID = 'template_matt_gmail';
  private readonly USER_ID = 'zCI6gh7hkcb7djNRW';



  constructor() {
    emailjs.init(this.USER_ID);
  }

  sendEmail(params: any) : Promise<boolean> {
    return new Promise((resolve) => {
      try {
        emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, {
          name: params.name,
          email: params.email,
          time: new Date().toLocaleString(),
          message: params.message,
          title: params.name + ' - ' + params.email
        });
        resolve(true);
      } catch (error) {
        console.error('Error sending email:', error);
        resolve(false);
      }
    });
  }
}
