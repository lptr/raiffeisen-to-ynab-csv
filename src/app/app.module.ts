import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

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

    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
