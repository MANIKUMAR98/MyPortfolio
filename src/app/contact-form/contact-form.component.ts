
import { Component, ViewChild } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmailJSResponseStatus } from 'emailjs-com';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(private spinner: NgxSpinnerService, private service: AppServiceService) {
   }

  ngOnInit(): void {
    
  }
  
  send(event: any) {
    this.spinner.show();
    this.service.sendEmail(event).then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.spinner.hide();
          const form = event.target as HTMLFormElement;
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
