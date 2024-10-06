import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
 

  constructor(private http:HttpClient) { }

  addSubject(id: string, name: string) {
    const url=`http://localhost:8080/subject/add-subject`;
  return this.http.post(url,{id,name});
  }
  getAllSubject():Observable<any> {
    const url = 'http://localhost:8080/subject/get-all-subjects';

    return this.http.get(url);
  }
  getSubjectById(id:any):Observable<any>{
    const url=`http://localhost:8080/subject/get-subject-by-id/${id}`;
    return this.http.get(url);

  }
  updateSubject(id: string):Observable<any> {
    const url = `http://localhost:8080/subject/update-Subject/${id}`;

    return this.http.get(url);
}
deleteSubject(id: any): Observable<any> {
  const url = `http://localhost:8080/subject/delete-subject/${id}`;
  const params = new HttpParams().set('id', id);
  return this.http.delete(url, { params,responseType: 'text' });
}

}
