import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit  {

  loginform: any; 
  isError:boolean = false;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router,
    public snackBar: MatSnackBar,
  ) {
   
    //this.phone = PHONE;
    /****login */
    this.loginform = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });


  }

  login() {
    //this.loader = true;
    let fd = new FormData()
    fd.append('email', this.loginform.value.email);
    fd.append('password', this.loginform.value.password);
    this.userService.loginUser(fd).subscribe(data => {
      console.log(data); // get user data
      //this.permissionArrayProcess(data); // retrive from permission array
      localStorage.setItem('token', data['token']); // set authoraization token in localStorage
      //localStorage.setItem('user_type', data['user']['type_id']); // set typeId in localStorage
      localStorage.setItem('user_id', data['user']['id']);
      this.userService.isLoggedIn = true; // set loggied in true
      localStorage.setItem('isLoggedIn','true');
     // this.loader = false;
      //this.openSnackBar('Sir !Successfully logged in.Waiting for data load. ', 'ok');
      //let redirect = ''; // redirect to the dashboard
      //this.router.navigate([redirect]);
      if (this.userService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect =  '/';
 
        // Redirect the user
        this.router.navigateByUrl(redirect);
      } 
    }, err => {
     // this.loader = false;
     this.isError = true;
      //if(err.status == 400) location.reload(true);
     this.openSnackBar('Error :'+err.error.error+' Status :'+err.statusText, 'ok');
      console.log(err);
    });
  }

  ngOnInit() {
    // this.loader = true;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
     // duration: 2000,
    });
  }
}
