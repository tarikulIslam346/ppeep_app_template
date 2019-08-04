import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MarchantService } from '../../../services/marchant.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  merchantFoodCategoryform:any;
  merchantId:number;
  spinner:boolean;

  constructor(
    public fb: FormBuilder,
    public marchantService:MarchantService,
    public snackBar: MatSnackBar,
    public router: Router,
    public route:ActivatedRoute,
  ) { 
    this.merchantFoodCategoryform = this.fb.group({
      category_name: ['', Validators.required],
      category_description: ['', Validators.required],
      status: ['',Validators.required],
      /*'cat_id'
  'merchant_id'
'category_name'
'category_description'
'photo'
'status'
  'sequence'
'ip_address'
  'spicydish'
    'spicydish_notes'
    'dish'
    'category_name_trans'
    'category_description_trans'
  'parent_cat_id'
  'monday'
  'tuesday'
  'wednesday'
  'thursday'
  'friday'
  'saturday'
  'sunday'*/
    });
  }
  createrestaurnatFoodCategory(fd){
    this.spinner = true;
    this.marchantService.createRestaurnatFoodCategory(fd).subscribe(data => {
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
     
    }
  }
  restaurnatFoodCategoryFormSubmit(){
    console.log(this.merchantFoodCategoryform.value);
    let fd = new FormData();
    fd.append('merchant_id', this.merchantId.toString());
    fd.append('category_name', this.merchantFoodCategoryform.value.category_name);
    fd.append('category_description', this.merchantFoodCategoryform.value.category_description);
    if(this.merchantFoodCategoryform.value.status == true)fd.append('status', 'publish');
    if(this.merchantFoodCategoryform.value.status != true)fd.append('status', 'Not publish');
    this.createrestaurnatFoodCategory(fd)
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
     // duration: 2000,
    });
  }

}
