import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasTestComponent } from './tareas-test.component';

describe('TareasTestComponent', () => {
  let component: TareasTestComponent;
  let fixture: ComponentFixture<TareasTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasTestComponent]
    });
    fixture = TestBed.createComponent(TareasTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
