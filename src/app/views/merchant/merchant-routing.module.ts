import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { OrderComponent } from './order/order.component';
import { FoodExpressUserBenifitComponent } from './food-express-user-benifit/food-express-user-benifit.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';

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
        path: 'foodmenu/:id',
        component: FoodMenuComponent,
        data: {
          title: 'Food Menu List'
        }
      },
      {
        path: 'add-merchant',
        component: AddMerchantComponent,
        data: {
          title: 'Add Merchant '
        }
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          title: 'Order list '
        }
      },
      {
        path: 'user-benifit',
        component: FoodExpressUserBenifitComponent,
        data: {
          title: 'FNF  Benifit'
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
