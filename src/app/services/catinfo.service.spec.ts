import { TestBed } from '@angular/core/testing';

import { CatinfoService } from './catinfo.service';

describe('CatinfoService', () => {
  let service: CatinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
