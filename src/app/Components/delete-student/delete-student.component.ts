import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { 
    const selectedId =
      this.activatedRoute.snapshot.paramMap.get('id');

    this.studentService.deleteStudent(selectedId).subscribe((response) => {
      alert('deleted');
      this.router.navigate(['/get-all-students']);
    });
  }
}
