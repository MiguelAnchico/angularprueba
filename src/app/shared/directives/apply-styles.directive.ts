import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appApplyStyles]',
})
export class ApplyStylesDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '24px');
  }
}
