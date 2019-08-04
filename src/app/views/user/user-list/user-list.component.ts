import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material';
import { fileUpload } from '../../../commonUrl';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user:User[];
  image = fileUpload;
  spinner:boolean;


  constructor(
    public userService:UserService,
    public snackBar: MatSnackBar,
    
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
   this.spinner = true;
    this.userService.getAllUser().subscribe(data => {
     this.spinner = false;
      console.log(data);
      this.user = data;
      //if(!this.userEdit)this.userType.splice(0,1);
    }, error => {
      this.spinner = false;
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
