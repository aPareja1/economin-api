import { TestBed } from '@angular/core/testing';

import { MonedasService } from './monedas.service';

describe('MonedasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonedasService = TestBed.get(MonedasService);
    expect(service).toBeTruthy();
  });
});
