import { TestBed } from '@angular/core/testing';

import { GitAgreementDetailsService } from './git-agreement-details.service';

describe('GitAgreementDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitAgreementDetailsService = TestBed.get(GitAgreementDetailsService);
    expect(service).toBeTruthy();
  });
});
