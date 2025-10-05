import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TitleComponent} from './views/title/title.component';
import {DestinationComponent} from './views/destination/destination.component';
import {Activities} from './views/activities/activities';
import {Prediction1} from './views/prediction1/prediction1';
import {AboutComponent} from './views/about-component/about-component';

const routes: Routes = [
  { path: 'inicio', component: TitleComponent},
  { path: 'destination', component: DestinationComponent},
  { path: 'activities', component: Activities},
  { path: 'about', component: AboutComponent},
  { path: 'predict/:city/:date', component: Prediction1},
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
