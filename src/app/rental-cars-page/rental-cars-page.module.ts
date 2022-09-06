import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

import { RentalCarsPageRoutingModule } from './rental-cars-page-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RentalCarsPageRoutingModule,
    CountdownModule
  ]
})
export class RentalCarsPageModule { }
