import { TestBed } from '@angular/core/testing';

import { BovisyncService } from './bovisync.service';

describe('BovisyncService', () => {
  let service: BovisyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BovisyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
