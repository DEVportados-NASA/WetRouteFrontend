import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cities} from '../../destination/models/api-responses/cities-response';
import {FormControl} from '@angular/forms';
import {CityService} from '../../destination/services/city/city-service';
import {PredictService} from '../../destination/services/predict/predict.service';
import {RecommendationService} from '../../destination/services/recommendation/recommendation.service';
import {GetPredictionDto} from '../../destination/models/get-prediction.dto';
import {PredictionDto} from '../../destination/models/prediction.dto';
import {GetRecommendationsDto} from '../../destination/models/get-recommendations.dto';

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
  prediction_gen: string = 'Based on our AI analysis of your travel data, we have generated the following tailored recommendations for you:\n\n';

  temperature = { max: 27, min: 27, mean: 27 };
  mm: number = 0.2; // Lluvia en mm
  cloudCover: number = 15;

  loaded = false

  constructor(private route: ActivatedRoute, private cityService: CityService,
              private router: Router,private predictService: PredictService,private recommendationService: RecommendationService   ) {}

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

    const dateObj = new Date(this.dateSelected);

    const body: GetPredictionDto = {
      city: this.citySelected,
      date: dateObj
    };

    this.predictService.getPrediction(body).subscribe({
      next: (res) => {
        this.temperature.mean= res.prediction.average_temperature;
        this.temperature.max= res.prediction.max_temperature;
        this.temperature.min= res.prediction.min_temperature;
        this.cloudCover= res.prediction.cloud_cover_percentage;
        this.mm= res.prediction.rain_probability_percentage;


        const recommendationsBody: GetRecommendationsDto = {
          city: this.citySelected,
          date: dateObj,
          max_temperature: this.temperature.max,
          min_temperature: this.temperature.min,
          average_temperature: this.temperature.mean,
          rain_probability_percentage: this.mm,
          cloud_cover_percentage: this.cloudCover
        };

        this.
          recommendationService.getRecommendations(recommendationsBody).subscribe({
          next: (recRes) => {
            this.prediction_gen += "\t-"
            this.prediction_gen += recRes.recommendation.firstRecommendation;
            this.prediction_gen += "\n\n"
            this.prediction_gen += "\t-"
            this.prediction_gen += recRes.recommendation.secondRecommendation;
            this.prediction_gen += "\n\n"
            this.prediction_gen += "\t-"
            this.prediction_gen += recRes.recommendation.thirdRecommendation;
            this.prediction_gen += "\n\n"
            this.prediction_gen += "\t-"
            this.prediction_gen += recRes.recommendation.fourthRecommendation;
            this.prediction_gen += "\n\n"
            this.prediction_gen += "\t-"
            this.prediction_gen += recRes.recommendation.fifthRecommendation;
            this.prediction_gen += "\n"

            console.log('Recommendations:', recRes);
            this.loaded = true;
          },
          error: (err) => {
            console.error('Error fetching recommendations:', err);
          }

        });

        console.log('Prediction:', res);
      },
      error: (err) => {
        console.error('Error fetching prediction:', err);
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





// Funciones para texto y clases según lluvia
  rainLevelText(mm: number): string {
    if (mm === 0) return 'None';
    if (mm <= 2) return 'Light';
    if (mm <= 5) return 'Moderate';
    if (mm <= 10) return 'Heavy';
    return 'Very Heavy';
  }

  rainLevelClass(mm: number): string {
    if (mm === 0) return 'none';
    if (mm <= 2) return 'light';
    if (mm <= 5) return 'moderate';
    if (mm <= 10) return 'heavy';
    return 'very-heavy';
  }


}
