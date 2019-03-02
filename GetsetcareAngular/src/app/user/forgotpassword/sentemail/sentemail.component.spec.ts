import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentemailComponent } from './sentemail.component';

describe('SentemailComponent', () => {
  let component: SentemailComponent;
  let fixture: ComponentFixture<SentemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
