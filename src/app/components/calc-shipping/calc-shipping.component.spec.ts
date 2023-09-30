import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcShippingComponent } from './calc-shipping.component';

describe('CalcShippingComponent', () => {
  let component: CalcShippingComponent;
  let fixture: ComponentFixture<CalcShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcShippingComponent]
    });
    fixture = TestBed.createComponent(CalcShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
