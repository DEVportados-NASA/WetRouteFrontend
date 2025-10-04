import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  constructor(
              private router: Router,
              private route: ActivatedRoute) {
  }


  goToProductDetail() {
    this.router.navigate(['/destination']);
  }

}
