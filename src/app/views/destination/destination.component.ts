import {Component, OnInit} from '@angular/core';
import {PredictService} from '../../destination/services/predict/predict.service';
import {RecommendationService} from '../../destination/services/recommendation/recommendation.service';
import {GetPredictionDto} from '../../destination/models/get-prediction.dto';
import {ErrorSnackBar} from '../../shared/pages/error-snack-bar/error-snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorMessage} from '../../shared/models/error-message';
import {Cities} from '../../destination/models/api-responses/cities-response';
import {FormControl} from '@angular/forms';
import {CityService} from '../../destination/services/city/city-service';
import {Router} from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {
  cities: Cities[] = [];


  cityControl = new FormControl('');
  filteredCities: string[] = [];

  constructor(private cityService: CityService,
              private router: Router,) {}


  ngOnInit() {
    this.cityService.getCities().subscribe({
      next: (data) => {
        this.cities = data.cities;
        console.log('Searching city:', this.cities);

      },
      error: (err) => {
        console.error('Error loading cities:', err);
      }
    });
  }

  searchCity() {
    const city = this.cityControl.value;


    if (city) {
      console.log('Searching city:', city);
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      this.router.navigate(['/predict', city, formattedDate]);
    }
  }

}

