import { TestBed } from '@angular/core/testing';

import { RentalCarsPageService } from './rental-cars-page.service';

describe('RentalCarsPageService', () => {
  let service: RentalCarsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalCarsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
