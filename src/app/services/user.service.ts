import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  deleteStudent(selectedId: string | null) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private http:HttpClient) { }
  addUser(firstName:string,lastName:string,username:string,password:string,email:string,role:string):Observable<any>{
    const url=`http://localhost:8080/user/register-user`;
    return this.http.post(url,{firstName,lastName,username,password,email,role});
    
  }


  // get all user

  getAllUser():Observable<any> {
    const url = 'http://localhost:8080/user/get-all-user';

    return this.http.get(url);
  }
getUserByUsername(username:any):Observable<any>{
  const url = `http://localhost:8080/user/get-user-by-username/${username}`;

    return this.http.get(url);

}
updateUser(user: any):Observable<any>{
  const url = `http://localhost:8080/user/update-user`;

    return this.http.put(url,user);

}
deleteUser(username: any): Observable<any> {
  const url = `http://localhost:8080/user/delete-user-by-username`;
  const params = new HttpParams().set('username', username);
  return this.http.delete(url, { params,responseType: 'text' });
}
}
