import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperFormComponent } from './steper-form.component';

describe('SteperFormComponent', () => {
  let component: SteperFormComponent;
  let fixture: ComponentFixture<SteperFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteperFormComponent]
    });
    fixture = TestBed.createComponent(SteperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
