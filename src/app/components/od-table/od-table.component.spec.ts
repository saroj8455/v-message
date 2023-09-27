import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdTableComponent } from './od-table.component';

describe('OdTableComponent', () => {
  let component: OdTableComponent;
  let fixture: ComponentFixture<OdTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdTableComponent]
    });
    fixture = TestBed.createComponent(OdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
