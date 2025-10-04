import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TitleComponent} from './views/title/title.component';

const routes: Routes = [
  { path: 'inicio', component: TitleComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
