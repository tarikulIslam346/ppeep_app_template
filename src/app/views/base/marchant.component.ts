import { Component, OnInit } from '@angular/core';
import { MarchantService } from '../../services/marchant.service';
import { Marchant } from '../../model/marchant';


@Component({
  selector: 'app-marchant',
  templateUrl: './marchant.component.html',
  styleUrls: ['./marchant.component.scss']
})
export class MarchantComponent implements OnInit {

  marchant:Marchant[];

  constructor(
    public marchantService:MarchantService,
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
      alert("Internal error")
      console.log(error);
    });
  }


}
