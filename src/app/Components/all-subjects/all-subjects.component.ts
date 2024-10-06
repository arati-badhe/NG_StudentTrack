import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent {
  constructor(private subjectService:SubjectService,private router:Router) {}

  ngOnInit(): void {
    this.getAllSubject();
  }

  subjects: any;

  getAllSubject() {
    this.subjectService.getAllSubject().subscribe((response)=> {
      this.subjects = response;
    });
  }
  deleteSubject(username: any) {
    this.subjectService.deleteSubject(username).subscribe((response) => {
      alert('User deleted');
      this.router.navigate(['/get-all-users']).then(() => {
        window.location.reload();
      });
    });
  }
}
