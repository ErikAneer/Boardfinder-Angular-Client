import { TestBed } from '@angular/core/testing';

import { RiderLevelService } from './rider-level.service';

describe('RiderLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiderLevelService = TestBed.get(RiderLevelService);
    expect(service).toBeTruthy();
  });
});
