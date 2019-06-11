import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodExpressDashboardComponent } from './food-express-dashboard.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
 {
    path: '/foodexpress/dashborad',
    component: FoodExpressDashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Food express'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodExpressDashboradRoutingModule { }
