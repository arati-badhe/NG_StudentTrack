import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { AllStudentsComponent } from './Components/all-students/all-students.component';
import { AddSubjectComponent } from './Components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './Components/all-subjects/all-subjects.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';
import { EditSubjectComponent } from './Components/edit-subject/edit-subject.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { ViewAttendanceComponent } from './Components/view-attendance/view-attendance.component';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';
import { DeleteSubjectComponent } from './Components/delete-subject/delete-subject.component';

const routes: Routes = [
  {
    path:"" , component:LoginComponent
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"add-user" , component:AddUserComponent
  },
  {
    path:'get-all-user',component:AllUsersComponent
  },
  
  {
    path:"update-user/:username", component:UpdateUserComponent
  },
  {
    path:"delete-user/:username", component:DeleteUserComponent
  },
  
  {
    path:"add-student" , component:AddStudentComponent
  },
  {
    path:"get-all-student" , component:AllStudentsComponent
  },
  {
    path:"update-student/:id", component:EditStudentComponent
  }
  ,
  {
    path:"delete-student/:id", component:DeleteStudentComponent
  },
  
  {
    path:'add-subject',component:AddSubjectComponent
  },
  {
    path:"get-all-subject" , component:AllSubjectsComponent
  },
  {
    path:"update-subject/:id", component:EditSubjectComponent
  },
  {
    path:"delete-subject/:id", component:DeleteSubjectComponent
  },
  {
    path:'attendance',  component: AttendanceComponent
  },
  {
    path:'view-attendance', component: ViewAttendanceComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule { 
}