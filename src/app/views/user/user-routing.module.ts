import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { DriverComponent } from './driver/driver.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'user'
      },
     {
        path: 'user',
        component: UserListComponent,
        data: {
          title: 'User List'
        }
      },
      {
        path: 'user-order',
        component: UserOrderHistoryComponent,
        data: {
          title: 'User Order History'
        }
      },
      {
        path: 'driver',
        component: DriverComponent,
        data: {
          title: 'Driver List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
