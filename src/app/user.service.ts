import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map,filter, retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';



  constructor(private http: HttpClient) { }
 
 
 
  gettodo  (): Observable<any> {
 
    return this.http.get<any>(this.apiUrl)
 
  }


  myob(){
    let aa = [1,2,3,4,5]
   return  of(1,2,3,4).pipe(
      map(n=> n + 3),
      retry(2)
    )
  }

  secondob(){
    return of(1,2,3,4).pipe(
      filter(n=>n <3)
    )
  }



authenticate(){

  localStorage.setItem("user","fre")

}

checkauthentication(){
  return (localStorage.getItem("user") === "fre")
}



}
