import { Directive, ElementRef, HostListener, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMaterialElevation]'
})
export class MaterialElevationDirective implements OnChanges {


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.setElevation(true);
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.setElevation(true);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setElevation(false);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setElevation(true);
  }

  setElevation(left: boolean) {
    if(left) {
      this.renderer.removeClass(this.element.nativeElement, "selected-card");
    } else {
      this.renderer.addClass(this.element.nativeElement, "selected-card");
    }
  }
}
