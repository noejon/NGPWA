import { TestBed, inject } from '@angular/core/testing';

import { StarWarsApiService } from './star-wars-api.service';

describe('StarWarsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarWarsApiService]
    });
  });

  it('should be created', inject([StarWarsApiService], (service: StarWarsApiService) => {
    expect(service).toBeTruthy();
  }));
});
