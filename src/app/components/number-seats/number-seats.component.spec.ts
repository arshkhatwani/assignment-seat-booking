import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSeatsComponent } from './number-seats.component';

describe('NumberSeatsComponent', () => {
  let component: NumberSeatsComponent;
  let fixture: ComponentFixture<NumberSeatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberSeatsComponent]
    });
    fixture = TestBed.createComponent(NumberSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
