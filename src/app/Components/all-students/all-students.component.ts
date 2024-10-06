import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  
  constructor(private studentService:StudentService,private router:Router) {}

  ngOnInit(): void {
    this.getAllStudent();
  }

  students: any;

  getAllStudent() {
    this.studentService.getAllStudent().subscribe((response)=> {
      this.students = response;
    });
  }
  deleteStudent(username: any) {
    this.studentService.deleteStudent(username).subscribe((response) => {
      alert('User deleted');
      this.router.navigate(['/get-all-users']).then(() => {
        window.location.reload();
      });
    });
  }
}
