import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FileHelpersModule } from 'ngx-file-helpers';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileHelpersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
