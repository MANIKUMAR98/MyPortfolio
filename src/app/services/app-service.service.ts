import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getNavData() {
    return this.http.get<any>('assets/data/nav-bar.json');
  }

  getWorkExpData() {
    return this.http.get<any>('assets/data/work-exp.json');
  }

  getProjectsData() {
    return this.http.get<any>('assets/data/projects.json');
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    return emailjs.sendForm('service_kvu3tw2', 'template_oemvesc', e.target as HTMLFormElement, 'ZcQa8W0wOQUYIwJlV')
      // .then(
      //   (result: EmailJSResponseStatus) => {
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
  }
}
