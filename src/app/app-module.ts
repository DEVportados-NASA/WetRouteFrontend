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


@NgModule({
  declarations: [
    App,
    TitleComponent,
    DestinationComponent,
    TitleComponent,
    ErrorSnackBar,
    Activities
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
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
