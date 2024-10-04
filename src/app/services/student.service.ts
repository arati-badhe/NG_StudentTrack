import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  

  constructor(private http:HttpClient) { }
  addStudent(id:string,name:string,email:string){

  const url=`http://localhost:8080/student/add-student`;
  return this.http.post(url,{id,name,email});
  }
  getAllStudent():Observable<any> {
    const url = 'http://localhost:8080/student/get-all-students';

    return this.http.get(url);
  }
  getStudentById(id:any):Observable<any>{
    const url=`http://localhost:8080/student/get-student-by-id/${id}`;
    return this.http.get(url);

  }
  updateStudent(id: string):Observable<any> {
    const url = `http://localhost:8080/student/update-Student/${id}`;

    return this.http.get(url);

  }
  
}
