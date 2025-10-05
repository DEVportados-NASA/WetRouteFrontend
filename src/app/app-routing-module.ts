import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TitleComponent} from './views/title/title.component';
import {DestinationComponent} from './views/destination/destination.component';
import {Activities} from './views/activities/activities';

const routes: Routes = [
  { path: 'inicio', component: TitleComponent},
  { path: 'destination', component: Activities},
  { path: 'activities', component: DestinationComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
