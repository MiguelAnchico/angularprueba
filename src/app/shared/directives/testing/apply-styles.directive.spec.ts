import { ApplyStylesDirective } from '../apply-styles.directive';

describe('ApplyStylesDirective', () => {
  it('should create an instance', () => {
    const el = jasmine.createSpyObj('el', ['nativeElement']);
    const renderer = jasmine.createSpyObj('renderer', ['setStyle']);
    const directive = new ApplyStylesDirective(el, renderer);
    expect(directive).toBeTruthy();
  });

  it('should set styles', () => {
    const el = { nativeElement: {} };
    const renderer = jasmine.createSpyObj('renderer', ['setStyle']);
    const directive = new ApplyStylesDirective(el as any, renderer);
    directive.ngOnInit();
    expect(renderer.setStyle).toHaveBeenCalled();
  });
});
