import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DriverComponent } from './driver/driver.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';

@NgModule({
  declarations: [UserListComponent, AddUserComponent, DriverComponent, UserOrderHistoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
