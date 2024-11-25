import { TestBed } from '@angular/core/testing';

import { AzureLanguageService } from './azure-language.service';

describe('AzureLanguageService', () => {
  let service: AzureLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
