import { Component } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  projects:any;

  constructor(private service: AppServiceService){
    this.service.getProjectsData().subscribe((res: any) => {
      this.projects =  res.data;
    })
  }
}
