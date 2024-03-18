import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import * as AOS from 'aos';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  animations: [trigger('slideUpDown', [
    state('open', style({
      height: '215px',
    })),
    state('closed', style({
      height: '0',
      opacity: 0,
      overflow: 'hidden',
    })),
    transition('open <=> closed', animate('400ms ease-in-out')),  // Adjust the animation duration
  ])
  ]
})
export class WorkExperienceComponent {
  
  workExpData:any;

  constructor(private service: AppServiceService){
    this.service.getWorkExpData().subscribe((res : any) => {
      this.workExpData = res.data;
    })
  }


  ngOnInit(): void {
    AOS.init({disable: 'mobile'});
    AOS.refresh();
  }

  onclick(data: any) {
    data.showCard = !data.showCard;
    this.workExpData.forEach((element: any) => {
      if(data.companyName != element.companyName) {
        element.showCard = false;
      }
    });
  }
}
