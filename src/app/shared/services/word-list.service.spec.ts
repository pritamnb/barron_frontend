import { TestBed } from '@angular/core/testing';

import { WordListService } from './word-list.service';

describe('WordListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordListService = TestBed.get(WordListService);
    expect(service).toBeTruthy();
  });
});
