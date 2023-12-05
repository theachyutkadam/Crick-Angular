import { TestBed } from '@angular/core/testing';

import { ScorebookParamsOperationService } from './scorebook-params-operation.service';

describe('ScorebookParamsOperationService', () => {
  let service: ScorebookParamsOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorebookParamsOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
