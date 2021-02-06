import { TestBed } from '@angular/core/testing';

import { ServouceService } from './servouce.service';

describe('ServouceService', () => {
  let service: ServouceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServouceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
