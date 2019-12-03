import { TestBed } from '@angular/core/testing';

import { RidingterrainService } from './ridingterrain.service';

describe('RidingterrainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RidingterrainService = TestBed.get(RidingterrainService);
    expect(service).toBeTruthy();
  });
});
