import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private studentService:StudentService){
  
  }
  id:string="";
  name:string="";
  email:string="";
addStudent(){
  this.studentService.addStudent(this.id,this.name,this.email).subscribe((response)=>{
    alert("done");
  })
}
}
