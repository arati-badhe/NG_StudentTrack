import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent {
  constructor(private subjectService:SubjectService) {}

  ngOnInit(): void {
    this.getAllSubject();
  }

  subjects: any;

  getAllSubject() {
    this.subjectService.getAllSubject().subscribe((response)=> {
      this.subjects = response;
    });
  }
}
