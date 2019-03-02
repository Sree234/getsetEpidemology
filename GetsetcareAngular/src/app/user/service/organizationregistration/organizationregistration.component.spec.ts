import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationregistrationComponent } from './organizationregistration.component';

describe('OrganizationregistrationComponent', () => {
  let component: OrganizationregistrationComponent;
  let fixture: ComponentFixture<OrganizationregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
