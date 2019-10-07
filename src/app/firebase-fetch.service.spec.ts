import { TestBed } from '@angular/core/testing';

import { FirebaseFetchService } from './firebase-fetch.service';

describe('FirebaseFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseFetchService = TestBed.get(FirebaseFetchService);
    expect(service).toBeTruthy();
  });
});
