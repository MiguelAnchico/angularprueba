import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaListComponentComponent } from './tarea-list-component.component';

describe('TareaListComponentComponent', () => {
  let component: TareaListComponentComponent;
  let fixture: ComponentFixture<TareaListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaListComponentComponent]
    });
    fixture = TestBed.createComponent(TareaListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
