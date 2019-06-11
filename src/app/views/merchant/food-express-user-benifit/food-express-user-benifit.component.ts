import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-express-user-benifit',
  templateUrl: './food-express-user-benifit.component.html',
  styleUrls: ['./food-express-user-benifit.component.scss']
})
export class FoodExpressUserBenifitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCollapsed: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
