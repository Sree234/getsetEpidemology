import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenttextComponent } from './senttext.component';

describe('SenttextComponent', () => {
  let component: SenttextComponent;
  let fixture: ComponentFixture<SenttextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenttextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenttextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
