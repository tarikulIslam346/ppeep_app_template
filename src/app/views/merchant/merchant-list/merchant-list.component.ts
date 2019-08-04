import { Component, OnInit } from '@angular/core';
import { MarchantService } from '../../../services/marchant.service';
import { Marchant } from '../../../model/marchant';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit {

  marchant:Marchant[];

  constructor(
    public marchantService:MarchantService,
    public snackBar: MatSnackBar,
    public router: Router,
    
  ) { }

  ngOnInit() {
    this.getRestaurantList();
  }

  getRestaurantList() {
   // this.loader = true;
    this.marchantService.getRestaurnats().subscribe(data => {
      //this.loader = false;
      console.log(data);
      this.marchant = data;
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
  seeFoodMenu(merchant_id){
    this.router.navigate(['/merchant/foodmenu/',merchant_id]);
  }
  addFoodMenu(merchant_id){
    this.router.navigate(['/merchant/add-food-menu/',merchant_id]);
  }
  addFoodCtegory(merchant_id){
    this.router.navigate(['/merchant/add-food-category/',merchant_id]);
  
  }
  EditMerchant(merchant_id){

  }

}
