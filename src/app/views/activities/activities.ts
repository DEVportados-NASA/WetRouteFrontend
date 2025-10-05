import {Component, OnInit} from '@angular/core';
import {Activity} from '../../destination/models/api-responses/activities-response';
import {ActivitiesService} from '../../destination/services/activities/activities-service';
import {ErrorMessage} from '../../shared/models/error-message';
import {ErrorSnackBar} from '../../shared/pages/error-snack-bar/error-snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities',
  standalone: false,
  templateUrl: './activities.html',
  styleUrl: './activities.css'
})
export class Activities  implements OnInit {
  activities: Activity[] = [];
  selectedActivities: Activity[] = [];

  constructor(private activityService: ActivitiesService, private snackBar: MatSnackBar,
              private router: Router) {}

  ngOnInit() {
    localStorage.removeItem('activities');
    this.activityService.getActivities().subscribe({
      next: (data) => {
        this.activities = data.activities;
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

  searchActivities() {
    const activitiesNames = this.selectedActivities.map(activity => activity.name);
    localStorage.setItem('activities', JSON.stringify(activitiesNames));
    this.router.navigate(['/activities-recommendation']).then();
  }
}
