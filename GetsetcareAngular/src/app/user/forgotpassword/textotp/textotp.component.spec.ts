import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextotpComponent } from './textotp.component';

describe('TextotpComponent', () => {
  let component: TextotpComponent;
  let fixture: ComponentFixture<TextotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
