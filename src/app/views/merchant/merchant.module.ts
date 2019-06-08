import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';


@NgModule({
  declarations: [ MerchantListComponent, AddMerchantComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MerchantModule { }
