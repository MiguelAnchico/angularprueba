import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTransformString]',
})
export class TransformStringDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const currentText = this.el.nativeElement.innerText;
    const transformedText = currentText.toUpperCase();
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerText',
      transformedText
    );
  }
}
