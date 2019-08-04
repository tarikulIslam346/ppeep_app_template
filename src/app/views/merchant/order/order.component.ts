import { Component, OnInit } from '@angular/core';
import { MarchantService } from '../../../services/marchant.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Order } from '../../../model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order:Order[];

  constructor(
    public marchantService:MarchantService,
    public snackBar: MatSnackBar,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    // this.loader = true;
     this.marchantService.getOrder().subscribe(data => {
       //this.loader = false;
       console.log(data);
       this.order = data;
       //if(!this.userEdit)this.userType.splice(0,1);
     }, error => {
       if(error.status == 400) location.reload(true);
       this.openSnackBar('Error :'+error.error.error+' Status :'+error.statusText, 'ok');
       console.log(error);
     });
   }
 
   openSnackBar(message: string, action: string) {
     this.snackBar.open(message, action, {
      // duration: 2000,
     });
   }
   /*seeFoodMenu(merchant_id){
     this.router.navigate(['/merchant/foodmenu/',merchant_id]);
   }*/

}
