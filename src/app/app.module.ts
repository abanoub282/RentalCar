import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalCarsPageComponent } from './rental-cars-page/rental-cars-page.component';
import { RentalCarEditComponent } from './rental-car-edit/rental-car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalCarsPageComponent,
    RentalCarEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
