import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { UserListComponent } from './user-list/user-list.component';

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
  

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
