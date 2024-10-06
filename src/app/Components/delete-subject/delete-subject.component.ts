 import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-delete-subject',
  templateUrl: './delete-subject.component.html',
  styleUrls: ['./delete-subject.component.css']
})
export class DeleteSubjectComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectService: SubjectService,
    private router: Router
  ) { 
    const selectedId =
      this.activatedRoute.snapshot.paramMap.get('id');

    this.subjectService.deleteSubject(selectedId).subscribe((response) => {
      alert('deleted');
      this.router.navigate(['/get-all-subjects']);
    });
  }
}
