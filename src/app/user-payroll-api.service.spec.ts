import { TestBed } from '@angular/core/testing';

import { UserPayrollApiService } from './user-payroll-api.service';

describe('UserPayrollApiService', () => {
  let service: UserPayrollApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPayrollApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
