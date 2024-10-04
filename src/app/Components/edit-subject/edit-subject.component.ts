import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit{
  constructor(private subjectService:SubjectService,private activatedRoute:ActivatedRoute){
  
  }
  selectedSubject:any;
  ngOnInit(): void {
    this.getSubject();
    
  }
  id:string="";
  name:string="";
  getSubject(){
    this.selectedSubject=this.activatedRoute.snapshot.paramMap.get('id');
this.subjectService.getSubjectById(this.selectedSubject).subscribe((response)=>{
  this.id=response.id;
  this.name=response.name;
 
});
  }
  updateSubject(){

  }
}
