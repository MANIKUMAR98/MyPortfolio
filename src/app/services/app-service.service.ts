import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
