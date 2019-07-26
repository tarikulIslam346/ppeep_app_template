import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from './../commonUrl';
import { HttpHeaders } from '@angular/common/http';
import { Marchant } from './../model/marchant';
import { Category } from './../model/category';

@Injectable({
  providedIn: 'root'
})
export class MarchantService {
  /*ng g s services/backendApi --module=app.module*/

  httpOptions = {
    headers: new HttpHeaders({
  
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  
  getRestaurnats() :Observable<Marchant[]> {
    return this.http.get<Marchant[]>(api + 'restaurnatList/admin', this.httpOptions);
  }
  
  getFoodMenu(data) :Observable<Category[]> {
    return this.http.get<Category[]>(api + 'restaurnatFoodMenu/admin/'+data, this.httpOptions);
  }
   
  createRestaurnat(data)  {
    return this.http.post(api + 'restaurnat/create', data,this.httpOptions);
  }

}
