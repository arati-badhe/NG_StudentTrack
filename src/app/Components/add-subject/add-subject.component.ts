import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  constructor(private subjectService:SubjectService){
  
  }
  id:string="";
  name:string="";
 
addSubject(){
  this.subjectService.addSubject(this.id,this.name).subscribe((response)=>{
    alert("done");
  })
}
}

