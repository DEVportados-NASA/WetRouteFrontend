import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {TitleComponent} from './views/title/title.component';
import { ErrorSnackBar } from './shared/pages/error-snack-bar/error-snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {provideHttpClient} from '@angular/common/http';
import {DestinationComponent} from './views/destination/destination.component';
import { Activities } from './views/activities/activities';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import { Navbar } from './shared/component/navbar/navbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatOption, provideNativeDateAdapter} from '@angular/material/core';
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Prediction1 } from './views/prediction1/prediction1';
import { AboutComponent } from './views/about-component/about-component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    App,
    TitleComponent,
    DestinationComponent,
    TitleComponent,
    ErrorSnackBar,
    Activities,
    Navbar,
    Prediction1,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatButton,
    MatTabGroup,
    MatTab,
    MatFormFieldModule,
    MatIconModule,
    MatInput,
    MatIconButton,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-PE'}
  ],
  bootstrap: [App]
})
export class AppModule { }
