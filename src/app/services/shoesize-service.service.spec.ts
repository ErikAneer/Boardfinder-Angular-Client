import { TestBed } from '@angular/core/testing';

import { ShoesizeService } from './shoesize.service';

describe('ShoesizeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoesizeService = TestBed.get(ShoesizeService);
    expect(service).toBeTruthy();
  });
});
