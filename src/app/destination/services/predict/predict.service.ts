import { Injectable } from '@angular/core';
import {BaseService} from '../../../shared/services/base/base.service';
import {PredictionApiResponse} from '../../models/api-responses/prediction-api-response';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {GetPredictionDto} from '../../models/get-prediction.dto';

@Injectable({
  providedIn: 'root'
})
export class PredictService extends BaseService<PredictionApiResponse>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'predict';
  }

  getPrediction(body: GetPredictionDto): Observable<PredictionApiResponse> {
    return this.http.post<PredictionApiResponse>(`${this.basePath}`, body, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).pipe(catchError(this.handleError));
  }
}
