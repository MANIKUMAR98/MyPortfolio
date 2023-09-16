import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  data: any = '';

  constructor(private http: HttpClient) {
    http.get("http://localhost:8080/getMessage").subscribe((res :any) => {
      this.data = res;
      console.log("res", res)
    })
  }

}
