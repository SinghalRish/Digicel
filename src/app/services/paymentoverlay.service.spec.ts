import { TestBed } from '@angular/core/testing';

import { PaymentoverlayService } from './paymentoverlay.service';

describe('PaymentoverlayService', () => {
  let service: PaymentoverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentoverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
