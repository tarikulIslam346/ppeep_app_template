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
    this.permissionArrayProcess(data); // retrive from permission array
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

  ngOnInit() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
     // duration: 2000,
    });
  }

  permissionArrayProcess(data) {
    for (let i = 0; i < data['roles'].length; i++) {
      /******* all permission****/
      console.log('Menu id : ' + data['roles'][i].menu_id +
        '\ncan_read : ' + data['roles'][i].can_read +
        '\ncan_write :' + data['roles'][i].can_write)
       /************ Merchant nav menu *******/
        if (data['roles'][i].menu_id == 1) {
          if (data['roles'][i].can_write == 1) {
            this.userService.userPermission.push('/merchant/add-merchant');
            this.userService.userPermission.push('/merchant/order');
          }
          if (data['roles'][i].can_read == 1 ) {

            this.userService.userPermission.push('/merchant/merchant');
            this.userService.userPermission.push('/merchant/user-benifit');
            this.userService.userPermission.push('/merchant/foodmenu');
            
          }
  
        } 
      /************user nav menu *******/
     if (data['roles'][i].menu_id == 2) {
        if (data['roles'][i].can_write == 1) {
          this.userService.userPermission.push('/user/user-order');
          this.userService.userPermission.push('/user/driver')
        }
  
        if (data['roles'][i].can_read == 1) {
          this.userService.userPermission.push('/user/user');
        }
      }


    }

   for (let i = 0; i < this.userService.userPermission.length; i++) {
      console.log(this.userService.userPermission[i] + "\n");
      /***** Merchant Nav menu ***/
      if (this.userService.userPermission[i] == '/merchant/merchant') {
        this.userService.isViewMerchantShowPermission = true;
        localStorage.setItem('isViewMerchantShow', 'true');
      } 
      if (this.userService.userPermission[i] == '/merchant/user-benifit') {
        this.userService.isViewUserBenifitPermission = true;
        localStorage.setItem('isViewUserBenifit', 'true');
      } 
      if (this.userService.userPermission[i] == '/merchant/foodmenu') {
        this.userService.isViewMerchantFoodMenuPermission = true;
        localStorage.setItem('isViewMerchantFoodMenu', 'true');
      }
      if (this.userService.userPermission[i] == '/merchant/add-merchant') {
        this.userService.isAddMerchantPermission = true;
        localStorage.setItem('isAddMerchant', 'true');
      }
      if (this.userService.userPermission[i] == '/merchant/order') {
        this.userService.isViewMerchantOrderPermission = true;
        localStorage.setItem('isViewMerchantOrder', 'true');
      }
      /***** user nav menu***/
      if (this.userService.userPermission[i] == '/user/user') {
        this.userService.isViewUserPermission = true;
        localStorage.setItem('isViewUser', 'true');
      }
      if (this.userService.userPermission[i] == '/user/driver') {
        this.userService.isViewDriverPermission = true;
        localStorage.setItem('isViewDriver', 'true');
      }
      if (this.userService.userPermission[i] == '/user/user-order') {
        this.userService.isViewUserOrderPermission = true;
        localStorage.setItem('isViewUserOrder', 'true');
      }
    }
  }
}
