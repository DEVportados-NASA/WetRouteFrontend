import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs';
import {Cities, CitiesResponse} from '../../destination/models/api-responses/cities-response';
import {CityService} from '../../destination/services/city/city-service';
import {Activity} from '../../destination/models/api-responses/activities-response';
import {ActivitiesService} from '../../destination/services/activities/activities-service';

@Component({
  selector: 'app-activities',
  standalone: false,
  templateUrl: './activities.html',
  styleUrl: './activities.css'
})
export class Activities  implements OnInit {
  cities: Activity[] = [];
  selectedCities: Activity[] = [];



  cityControl = new FormControl('');
  filteredCities: string[] = [];

  constructor(private activityService: ActivitiesService) {}


  ngOnInit() {
    this.activityService.getActivities().subscribe({
      next: (data) => {
        this.cities = data.activities;
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
      // Aquí puedes hacer la redirección o búsqueda real
    }
  }

}
