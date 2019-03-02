import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayumoneyprocessComponent } from './payumoneyprocess.component';

describe('PayumoneyprocessComponent', () => {
  let component: PayumoneyprocessComponent;
  let fixture: ComponentFixture<PayumoneyprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayumoneyprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayumoneyprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
