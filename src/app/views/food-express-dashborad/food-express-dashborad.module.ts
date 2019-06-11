import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodExpressDashboradRoutingModule } from './food-express-dashborad-routing.module';
import { FoodExpressDashboardComponent } from './food-express-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/public_api';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [FoodExpressDashboardComponent],
  imports: [
    CommonModule,
    FoodExpressDashboradRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ]
})
export class FoodExpressDashboradModule { }
