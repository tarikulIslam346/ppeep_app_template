import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { OrderComponent } from './order/order.component';
import { FoodExpressUserBenifitComponent } from './food-express-user-benifit/food-express-user-benifit.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';


@NgModule({
  declarations: [ MerchantListComponent, AddMerchantComponent, OrderComponent, FoodExpressUserBenifitComponent, FoodMenuComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
  ]
})
export class MerchantModule { }
