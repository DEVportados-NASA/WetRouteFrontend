import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  ActivityRecommendationService
} from '../../destination/services/activity-recommendation/activity-recommendation.service';
import {GetActivityRecommendationDto} from '../../destination/models/get-activity-recommendation.dto';
import {ErrorMessage} from '../../shared/models/error-message';
import {ErrorSnackBar} from '../../shared/pages/error-snack-bar/error-snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivityRecommendationDto} from '../../destination/models/activity-recommendation.dto';
import {ActivitiesService} from '../../destination/services/activities/activities-service';
import {Activity} from '../../destination/models/api-responses/activities-response';

@Component({
  selector: 'app-activities-recommendation',
  standalone: false,
  templateUrl: './activities-recommendation.html',
  styleUrl: './activities-recommendation.css'
})
export class ActivitiesRecommendation implements OnInit {
  loadingInfo: boolean;
  activityRecommendation: ActivityRecommendationDto;

  activities: Activity[] = [];
  selectedActivities: Activity[] = [];

  constructor(private router: Router, private activityRecommendationService: ActivityRecommendationService,
              private snackBar: MatSnackBar, private activityService: ActivitiesService) {
    this.loadingInfo = true;
    this.activityRecommendation = {} as ActivityRecommendationDto;
  }

  ngOnInit(): void {
    const activities = localStorage.getItem('activities');
    const activitiesList: string[] = activities ? JSON.parse(activities) : [];

    if (activitiesList.length === 0) {
      this.router.navigate(['/activities']).then();
    } else {
      this.activityService.getActivities().subscribe({
        next: (data) => {
          this.activities = data.activities;
          this.selectedActivities = this.activities.filter(activity => activitiesList.includes(activity.name));
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

      const getActivityRecommendationDto = {
        activities: activitiesList,
      } as GetActivityRecommendationDto;
      this.activityRecommendationService.getActivityRecommendation(getActivityRecommendationDto).subscribe({
        next: (response) => {
          this.activityRecommendation = response.activityRecommendation;
          this.loadingInfo = false;
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

  searchActivities() {
    const activitiesNames = this.selectedActivities.map(activity => activity.name);
    const getActivityRecommendationDto = {
      activities: activitiesNames,
    } as GetActivityRecommendationDto;
    this.loadingInfo = true;
    this.activityRecommendationService.getActivityRecommendation(getActivityRecommendationDto).subscribe({
      next: (response) => {
        this.activityRecommendation = response.activityRecommendation;
        this.loadingInfo = false;
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
