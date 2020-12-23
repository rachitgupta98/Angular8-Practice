import { TestBed } from '@angular/core/testing';

import { BtnServiceService } from './btn-service.service';

describe('BtnServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtnServiceService = TestBed.get(BtnServiceService);
    expect(service).toBeTruthy();
  });
});
