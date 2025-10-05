import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../../shared/services/base/base.service';
import {PredictionApiResponse} from '../../models/api-responses/prediction-api-response';
import {GetPredictionDto} from '../../models/get-prediction.dto';
import {catchError, map, Observable} from 'rxjs';
import {CitiesResponse} from '../../models/api-responses/cities-response';
import {ActivitiesResponse} from '../../models/api-responses/activities-response';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService extends BaseService<ActivitiesResponse>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'activities';
  }

  getActivities(): Observable<ActivitiesResponse> {
    return this.http.get<ActivitiesResponse>(`${this.basePath}`);
  }
}

