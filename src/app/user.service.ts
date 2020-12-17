import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';



  constructor(private http: HttpClient) { }
 
 
 
  gettodo  (): Observable<any> {
 
    return this.http.get<any>(this.apiUrl)
 
  }

}
