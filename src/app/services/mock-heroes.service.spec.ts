import { TestBed, inject } from '@angular/core/testing';

import { MockHeroesService } from './mock-heroes.service';

describe('MockHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockHeroesService]
    });
  });

  it('should be created', inject([MockHeroesService], (service: MockHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
