import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesRecommendation } from './activities-recommendation';

describe('ActivitiesRecommendation', () => {
  let component: ActivitiesRecommendation;
  let fixture: ComponentFixture<ActivitiesRecommendation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesRecommendation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesRecommendation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
