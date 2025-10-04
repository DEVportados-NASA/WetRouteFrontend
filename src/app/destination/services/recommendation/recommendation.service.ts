import { Injectable } from '@angular/core';
import {BaseService} from '../../../shared/services/base/base.service';
import {RecommendationApiResponse} from '../../models/api-responses/recommendation-api-response';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {GetRecommendationsDto} from '../../models/get-recommendations.dto';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService extends BaseService<RecommendationApiResponse>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'recommendations';
  }

  getRecommendations(body: GetRecommendationsDto): Observable<RecommendationApiResponse> {
    return this.http.post<RecommendationApiResponse>(`${this.basePath}`, body, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).pipe(catchError(this.handleError));
  }
}
