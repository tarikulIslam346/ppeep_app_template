import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MarchantService } from '../../../services/marchant.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../../model/category';

@Component({
  selector: 'app-add-food-menu',
  templateUrl: './add-food-menu.component.html',
  styleUrls: ['./add-food-menu.component.scss']
})
export class AddFoodMenuComponent implements OnInit {

  merchantFoodItemform:any;
  merchantId:number;
  category:Category[];
  spinner:boolean;

  constructor(
    public fb: FormBuilder,
    public marchantService:MarchantService,
    public snackBar: MatSnackBar,
    public router: Router,
    public route:ActivatedRoute,
  ) { 
    this.merchantFoodItemform = this.fb.group({
      item_name: ['', Validators.required],
      item_description: ['', Validators.required],
      status: ['',Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      discount:[''],
      addon_item: [''],
      ingredients: [''],
      /*'addon_item',
      'cooking_ref',
      'discount',
      'multi_option',
      'multi_option_value',
      'photo',
      'sequence',
      'is_featured',
      'ip_address',
      'ingredients',
      'spicydish',
      'two_flavors',
      'two_flavors_position',
      'require_addon',
      'dish',
      'item_name_trans',
      'item_description_trans',
      'non_taxable',
      'not_available',
      'gallery_photo',
      'points_earned',
      'points_disabled',
      'special_product',
      'days_to_available',
      'packaging_fee',
      'packaging_incremental',*/
    });
  }

  createrestaurnatFoodMenu(fd){
    this.spinner = true;
    this.marchantService.createRestaurnatFoodItem(fd).subscribe(data => {
      this.spinner = false;
      console.log(data);
      this.openSnackBar('Success ', 'ok');
    }, error => {
      this.spinner = false;
      if(error.status == 400) location.reload(true);
      this.openSnackBar('Error :'+error.error.error+' Status :'+error.statusText, 'ok');
      console.log(error);
    });
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      this.merchantId = +this.route.snapshot.paramMap.get('id') 
      this.getRestaurantFoodCategory(this.merchantId)
    }
  }

  getRestaurantFoodCategory(id){
    this.spinner = true;
        this.marchantService.getFoodMenu(id).subscribe(data => {
          this.spinner = false;
          console.log(data);
          this.category = data;
          if(this.category.length == 0){
           this.openSnackBar('No menu available', 'ok');
          }
          //if(!this.userEdit)this.userType.splice(0,1);
        }, error => {
          this.spinner = false;
          if(error.status == 400) location.reload(true);
          this.openSnackBar('Error :'+error.error.error+' Status :'+error.statusText, 'ok');
          console.log(error);
        });
      
  }

  restaurnatFoodMenuFormSubmit(){
    console.log(this.merchantFoodItemform.value);
    let fd = new FormData();
    fd.append('merchant_id', this.merchantId.toString());
    fd.append('item_name', this.merchantFoodItemform.value.item_name);
    fd.append('item_description', this.merchantFoodItemform.value.item_description);
    if(this.merchantFoodItemform.value.status == true)fd.append('status', 'publish');
    if(this.merchantFoodItemform.value.status != true)fd.append('status', 'Not publish');
    fd.append('category', this.merchantFoodItemform.value.category);
    fd.append('price', this.merchantFoodItemform.value.price);
    fd.append('discount', this.merchantFoodItemform.value.discount);
    fd.append('addon_item', this.merchantFoodItemform.value.addon_item);
    fd.append('ingredients', this.merchantFoodItemform.value.ingredients);
    this.createrestaurnatFoodMenu(fd)
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
     // duration: 2000,
    });
  }

}
