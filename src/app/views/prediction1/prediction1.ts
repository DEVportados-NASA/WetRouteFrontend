import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cities} from '../../destination/models/api-responses/cities-response';
import {FormControl} from '@angular/forms';
import {CityService} from '../../destination/services/city/city-service';
import {PredictService} from '../../destination/services/predict/predict.service';
import {RecommendationService} from '../../destination/services/recommendation/recommendation.service';

@Component({
  selector: 'app-prediction1',
  standalone: false,
  templateUrl: './prediction1.html',
  styleUrl: './prediction1.css'
})
export class Prediction1 implements OnInit {

  cities: Cities[] = [];


  cityControl = new FormControl('');


  citySelected!: string;
  dateSelected!: string;
  prediction_gen: string =
    '  This is a test prediction. The weather in your selected city is sunny and pleasant today! This is a test prediction. The weather in your selected city is sunny and pleasant today! prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t prediction. The weather in your selected city is sunny and pleasant t';

  constructor(private route: ActivatedRoute, private cityService: CityService,
              private router: Router, predictService: PredictService, recommendationService: RecommendationService   ) {}

  ngOnInit() {
    this.citySelected = this.route.snapshot.paramMap.get('city') || '';
    this.dateSelected = this.route.snapshot.paramMap.get('date') || '';
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

    if (city)
    {
      const dateObj = new Date(this.dateSelected);
      const formattedDate = dateObj.toISOString().split('T')[0];

      this.router.navigateByUrl(`/predict/${city}/${formattedDate}`).then(() => {
        window.location.reload();
      });

    }
  }

}
