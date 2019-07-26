import { Component, OnInit } from '@angular/core';
import { MarchantService } from '../../../services/marchant.service';
import { MatSnackBar } from '@angular/material';
import { Category } from '../../../model/category';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  category:Category[];
  id:number;

  constructor(
    public marchantService:MarchantService,
    public snackBar: MatSnackBar,
    public router: Router,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getRestaurantFoodMenuList(this.id);
  }
  
  getRestaurantFoodMenuList(id) {
    // this.loader = true;
     this.marchantService.getFoodMenu(id).subscribe(data => {
       //this.loader = false;
       console.log(data);
       this.category = data;
       if(this.category.length == 0){
        this.openSnackBar('No menu available', 'ok');
       }
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
