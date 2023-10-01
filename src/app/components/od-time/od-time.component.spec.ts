import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdTimeComponent } from './od-time.component';

describe('OdTimeComponent', () => {
  let component: OdTimeComponent;
  let fixture: ComponentFixture<OdTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdTimeComponent]
    });
    fixture = TestBed.createComponent(OdTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
