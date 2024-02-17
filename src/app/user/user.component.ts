import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, NgZone,  ElementRef } from '@angular/core';
import Typed from 'typed.js';
declare var VANTA : any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  data: any = '';
  @ViewChild('typingElement', { static: false }) typingElement!: ElementRef;

  ngAfterViewInit(): void {
    this.initTyped();
    VANTA.NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.00,
      minWidth: 500.00,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 17.00,
      maxDistance: 26.00,
      spacing: 21.00,
      showDots : false,
      color: 0x987185,
      backgroundColor: 0xa2539 
      // color: 0x987272,
      // backgroundColor: 0x30314
    });
  }

  initTyped(): void {
    const options = {
      strings: ['Manikumar Honnenahalli Lakshminarayana Swamy  '],
      typeSpeed: 80, 
      backSpeed: 30, 
      showCursor: true, 
    };

    new Typed(this.typingElement.nativeElement, options);
  }
    
  constructor(private el: ElementRef, private http: HttpClient, private ngZone: NgZone) {
    // http.get("http://localhost:8080/getMessage").subscribe((res :any) => {
    //   this.data = res;
    //   console.log("res", res)
    // })
  }

  ngOnInit(): void {
  
  }

}
