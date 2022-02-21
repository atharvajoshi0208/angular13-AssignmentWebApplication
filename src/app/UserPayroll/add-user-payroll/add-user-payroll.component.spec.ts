import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPayrollComponent } from './add-user-payroll.component';

describe('AddUserPayrollComponent', () => {
  let component: AddUserPayrollComponent;
  let fixture: ComponentFixture<AddUserPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
