import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  constructor(private studentService:StudentService) {}

  ngOnInit(): void {
    this.getAllStudent();
  }

  students: any;

  getAllStudent() {
    this.studentService.getAllStudent().subscribe((response)=> {
      this.students = response;
    });
  }
}
