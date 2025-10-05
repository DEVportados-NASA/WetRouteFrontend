import { TestBed } from '@angular/core/testing';

import { ActivityRecommendationService } from './activity-recommendation.service';

describe('ActivityRecommendationService', () => {
  let service: ActivityRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
