import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, NgZone,  ElementRef, HostListener } from '@angular/core';
import Typed from 'typed.js';
import { AppServiceService } from '../services/app-service.service';
import * as AOS from 'aos';
declare var VANTA : any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  @ViewChild('typingElement', { static: false }) typingElement!: ElementRef;
  navbarData:any = ''

  ngAfterViewInit(): void {
    this.initTyped();
  }

  initTyped(): void {
    let options = {};
    const screenWidth = window.innerWidth;

    options = {
      strings: ['Manikumar H L'],
      typeSpeed: 80, 
      backSpeed: 30, 
      showCursor: true
  };

    new Typed(this.typingElement.nativeElement, options);
}
  ngOnInit(): void {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();
  }
    
  constructor(private el: ElementRef, private service: AppServiceService, private ngZone: NgZone) {
   this.service.getNavData().subscribe((res :any) => {
      this.navbarData = res;
    })
  }
  
  scroll(targetId: any) {
      let element = document.getElementById(targetId);
      if(element) {
        // Scroll to the element with an offset for the navigation bar
        window.scrollTo({
            top: element.offsetTop - 90,
            behavior: 'smooth'
        });
        
          // element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
  }
}

window.addEventListener('scroll', function() {
  var navBar = document.querySelector('.nav');
  var scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    if(navBar) {
      navBar.classList.add('scrolled');
    }
  } else {
    if(navBar) {
      navBar.classList.remove('scrolled');
    }
  }
});
