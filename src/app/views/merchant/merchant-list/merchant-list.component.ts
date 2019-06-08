import { Component, OnInit } from '@angular/core';
import { MarchantService } from '../../../services/marchant.service';
import { Marchant } from '../../../model/marchant';
import { MatSnackBar } from '@angular/material';

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

}
