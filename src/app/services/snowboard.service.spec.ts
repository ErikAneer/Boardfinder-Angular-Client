import { TestBed } from '@angular/core/testing';

import { SnowboardService } from './snowboard.service';

describe('SnowboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnowboardService = TestBed.get(SnowboardService);
    expect(service).toBeTruthy();
  });
});
