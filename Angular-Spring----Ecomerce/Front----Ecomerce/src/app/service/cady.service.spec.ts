import { TestBed } from '@angular/core/testing';

import { CadyService } from './cady.service';

describe('CadyService', () => {
  let service: CadyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
