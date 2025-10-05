import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  tabs = ['/destination', '/activities', '/about'];

  constructor(private router: Router) {}

  onTabChange(event: MatTabChangeEvent) {
    const route = this.tabs[event.index];
    this.router.navigate([route]);
  }
}
