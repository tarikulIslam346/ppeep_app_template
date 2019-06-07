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

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer' + localStorage.getItem('token')
    })
  };
  

  loginUser(data):Observable<User[]> {
    return this.http.post<User[]>(api+'user/signin', data, this.httpOptions);
  }
}
