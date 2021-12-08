import { TestBed } from '@angular/core/testing';

import { NeeddataService } from './needdata.service';

describe('NeeddataService', () => {
  let service: NeeddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeeddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
