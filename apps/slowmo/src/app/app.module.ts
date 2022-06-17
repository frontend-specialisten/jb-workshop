import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RndListComponentModule } from './rnd-list/rnd-list.component';
import { SalesListComponentModule } from './sales-list/sales-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RndListComponentModule,
    SalesListComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
