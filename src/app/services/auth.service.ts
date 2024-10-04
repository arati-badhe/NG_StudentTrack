import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

  loginUser(username:any,password:any):Observable<any>{
    const url="http://localhost:8080/user/login-user";
    return this.http.post(url,{username,password});
  }
}
