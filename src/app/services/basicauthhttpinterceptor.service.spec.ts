import { TestBed } from '@angular/core/testing';

import { BasicAuthHtppInterceptorService } from './basicauthhttpinterceptor.service';

describe('BasicAuthHtppInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHtppInterceptorService = TestBed.get(BasicAuthHtppInterceptorService);
    expect(service).toBeTruthy();
  });
});
