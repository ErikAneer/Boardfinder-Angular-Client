import { TestBed } from '@angular/core/testing';

import { TechdetailService } from './techdetail.service';

describe('BendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechdetailService = TestBed.get(TechdetailService);
    expect(service).toBeTruthy();
  });
});
