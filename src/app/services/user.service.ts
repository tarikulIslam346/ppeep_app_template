import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from './../commonUrl';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn :boolean=false;
  redirectUrl:string;
  userPermission:string[]=[];

  isViewMerchantShowPermission:boolean=false;
  isViewUserBenifitPermission:boolean=false;
  isViewMerchantFoodMenuPermission:boolean=false;
  isAddMerchantPermission:boolean=false;
  isViewMerchantOrderPermission:boolean=false;
  isViewUserPermission:boolean=false;
  isViewDriverPermission:boolean=false;
  isViewUserOrderPermission:boolean=false;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer' + localStorage.getItem('token')
    })
  };
  

  loginUser(data):Observable<User[]> {
    return this.http.post<User[]>(api+'user/signin', data, this.httpOptions);
  }

  getAllUser():Observable<User[]> {
    return this.http.get<User[]>(api+'user', this.httpOptions);
  }
}
