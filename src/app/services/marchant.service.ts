import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from './../commonUrl';
import { HttpHeaders } from '@angular/common/http';
import { Marchant } from './../model/marchant';

@Injectable({
  providedIn: 'root'
})
export class MarchantService {
  /*ng g s services/backendApi --module=app.module*/

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  
  getRestaurnats() :Observable<Marchant[]> {
    return this.http.get<Marchant[]>(api + 'restaurnats', this.httpOptions);
  }
}
