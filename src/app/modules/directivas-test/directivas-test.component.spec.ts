import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasTestComponent } from './directivas-test.component';

describe('DirectivasTestComponent', () => {
  let component: DirectivasTestComponent;
  let fixture: ComponentFixture<DirectivasTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivasTestComponent]
    });
    fixture = TestBed.createComponent(DirectivasTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
