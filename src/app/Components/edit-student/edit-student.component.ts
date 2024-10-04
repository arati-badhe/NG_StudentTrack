import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  constructor(private studentService:StudentService,private activatedRoute:ActivatedRoute){
  
  }
  selectedStudent:any;
  ngOnInit(): void {
   this.getStudent();
  }
  id:string="";
  name:string="";
  email:string="";

  getStudent(){
    this.selectedStudent=this.activatedRoute.snapshot.paramMap.get('id');
this.studentService.getStudentById(this.selectedStudent).subscribe((response)=>{
  this.id=response.id;
  this.name=response.name;
  this.email=response.email;
});
  }
  updateStudent(){
    this.studentService.updateStudent(this.id).subscribe((response)=>{
  
      alert("Data Updated Sucessfully");
  });

}
}
