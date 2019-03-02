import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedmoduleComponent } from './sharedmodule.component';

describe('SharedmoduleComponent', () => {
  let component: SharedmoduleComponent;
  let fixture: ComponentFixture<SharedmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
