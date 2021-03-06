import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailotpComponent } from './emailotp.component';

describe('EmailotpComponent', () => {
  let component: EmailotpComponent;
  let fixture: ComponentFixture<EmailotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
