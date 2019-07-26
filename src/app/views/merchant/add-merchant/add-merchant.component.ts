import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MarchantService } from '../../../services/marchant.service';
import { MatSnackBar } from '@angular/material';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss']
})
export class AddMerchantComponent implements OnInit {
  merchantform: any;

  constructor(
    public fb: FormBuilder,
    public marchantService:MarchantService,
    public snackBar: MatSnackBar,
    public router: Router,
  ) { 
    this.merchantform = this.fb.group({
      restaurant_name: ['', Validators.required],
      restaurant_slug: ['', Validators.required],
      restaurant_phone: ['',Validators.required],
      contact_name: ['', Validators.required],
      contact_email: ['', Validators.required],
      contact_phone: ['', Validators.required],
      country_code: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      post_code: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      latitude: ['', Validators.required],
      lontitude: ['', Validators.required],
    });
  }

  ngOnInit() {
  
  }

  restaurnatFormSubmit(){
    console.log(this.merchantform.value);
    let fd = new FormData();
    fd.append('restaurant_name', this.merchantform.value.restaurant_name);
    fd.append('restaurant_slug', this.merchantform.value.restaurant_slug);
    fd.append('restaurant_phone', this.merchantform.value.restaurant_phone);
    fd.append('contact_name', this.merchantform.value.contact_name);
    fd.append('contact_phone', this.merchantform.value.contact_phone);
    fd.append('contact_email', this.merchantform.value.contact_email);
    fd.append('country_code', this.merchantform.value.country_code);
    fd.append('city', this.merchantform.value.city);
    fd.append('street', this.merchantform.value.street);
    fd.append('state', this.merchantform.value.state);
    fd.append('post_code', this.merchantform.value.post_code);
    fd.append('username', this.merchantform.value.username);
    fd.append('password', this.merchantform.value.password);
    fd.append('latitude', this.merchantform.value.latitude);
    fd.append('lontitude', this.merchantform.value.lontitude);
    this.createRestaurant(fd);

  }

  createRestaurant(data) {
    // this.loader = true;
     this.marchantService.createRestaurnat(data).subscribe(data => {
       //this.loader = false;
       console.log(data);
    
      // this.marchant = data;
       //if(!this.userEdit)this.userType.splice(0,1);
       this.openSnackBar('Success', 'ok');
       this.router.navigate['/merchant/merchant'];
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
