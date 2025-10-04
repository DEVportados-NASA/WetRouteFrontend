import { Component, signal } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WetRouteFrontend');

  showNavbar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Oculta el navbar si la ruta termina en /inicio
        const url = event.urlAfterRedirects || event.url;
        this.showNavbar = url !== '/inicio';
      });
  }
}
