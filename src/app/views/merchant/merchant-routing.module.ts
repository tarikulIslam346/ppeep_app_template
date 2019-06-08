import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Merchant'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'merchant'
      },
      {
        path: 'merchant',
        component: MerchantListComponent,
        data: {
          title: 'Merchant List'
        }
      },
      {
        path: 'add-merchant',
        component: AddMerchantComponent,
        data: {
          title: 'Add Merchant '
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
