import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {TitleComponent} from './views/title/title.component';
import { ErrorSnackBar } from './shared/pages/error-snack-bar/error-snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButton} from '@angular/material/button';
import {provideHttpClient} from '@angular/common/http';
import {DestinationComponent} from './views/destination/destination.component';

@NgModule({
  declarations: [
    App,
    TitleComponent,
    DestinationComponent,
    TitleComponent,
    ErrorSnackBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatButton
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
