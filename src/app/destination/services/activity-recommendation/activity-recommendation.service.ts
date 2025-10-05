import { Injectable } from '@angular/core';
import {BaseService} from '../../../shared/services/base/base.service';
import {ActivityRecommendationApiResponse} from '../../models/api-responses/activity-recommendation-api-response';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {GetActivityRecommendationDto} from '../../models/get-activity-recommendation.dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityRecommendationService extends BaseService<ActivityRecommendationApiResponse>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'activity-recommendations';
  }

  getActivityRecommendation(body: GetActivityRecommendationDto): Observable<ActivityRecommendationApiResponse> {
    return this.http.post<ActivityRecommendationApiResponse>(`${this.basePath}`, body, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).pipe(catchError(this.handleError));
  }
}
