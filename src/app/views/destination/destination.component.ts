import {Component, OnInit} from '@angular/core';
import {PredictService} from '../../destination/services/predict/predict.service';
import {RecommendationService} from '../../destination/services/recommendation/recommendation.service';
import {GetPredictionDto} from '../../destination/models/get-prediction.dto';
import {ErrorSnackBar} from '../../shared/pages/error-snack-bar/error-snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorMessage} from '../../shared/models/error-message';

@Component({
  standalone:false,
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {
  getPredictionDto: GetPredictionDto;

  constructor(private predictionService: PredictService, private recommendationService: RecommendationService,
              private snackBar: MatSnackBar) {
    this.getPredictionDto = {} as GetPredictionDto;
  }

  async ngOnInit() {

  }

  getPrediction() {
    this.snackBar.open('Obteniendo predicciones...')
    this.predictionService.getPrediction(this.getPredictionDto).subscribe({
      next: (response) => {
        this.snackBar.dismiss();
        console.log(response);
      },
      error: (error: ErrorMessage) => {
        this.snackBar.openFromComponent(ErrorSnackBar, {
          data: {
            messages: error.message
          },
          duration: 2000
        });
      }
    });
  }
}
