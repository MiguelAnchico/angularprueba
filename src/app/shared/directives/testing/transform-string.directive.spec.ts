import { ElementRef, Renderer2 } from '@angular/core';
import { TransformStringDirective } from '../transform-string.directive';

describe('TransformStringDirective', () => {
  let el: jasmine.SpyObj<ElementRef>;
  let renderer: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    el = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    renderer = jasmine.createSpyObj('Renderer2', ['setProperty']);
  });

  it('should create an instance', () => {
    const directive = new TransformStringDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
