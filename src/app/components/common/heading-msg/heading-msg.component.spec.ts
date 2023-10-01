import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingMsgComponent } from './heading-msg.component';

describe('HeadingMsgComponent', () => {
  let component: HeadingMsgComponent;
  let fixture: ComponentFixture<HeadingMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingMsgComponent]
    });
    fixture = TestBed.createComponent(HeadingMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
