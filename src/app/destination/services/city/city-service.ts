import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../../shared/services/base/base.service';
import {PredictionApiResponse} from '../../models/api-responses/prediction-api-response';
import {GetPredictionDto} from '../../models/get-prediction.dto';
import {catchError, map, Observable} from 'rxjs';
import {CitiesResponse} from '../../models/api-responses/cities-response';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService<CitiesResponse>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'cities';
  }

  getCities(): Observable<CitiesResponse> {
    return this.http.get<CitiesResponse>(`${this.basePath}`);
  }
}

