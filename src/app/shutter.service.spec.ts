import { TestBed } from '@angular/core/testing';

import { ShutterService } from './shutter.service';

describe('ShutterService', () => {
  let service: ShutterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShutterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
