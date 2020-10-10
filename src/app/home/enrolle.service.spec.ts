import { TestBed } from '@angular/core/testing';

import { EnrolleService } from './enrolle.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnrolleService', () => {
  let service: EnrolleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnrolleService,
    ],
    imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EnrolleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
