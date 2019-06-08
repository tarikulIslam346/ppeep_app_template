import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss']
})
export class AddMerchantComponent implements OnInit {
  merchantform: any;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.merchantform = this.fb.group({
      restaurant_name: ['', Validators.required],
      restaurant_slug: ['', Validators.required],
      restaurant_phone: ['',Validators.required],
      /*restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],
      restaurant_name: ['', [Validators.required, Validators.email]],*/
      password: ['', Validators.required]
    });
  }

}
