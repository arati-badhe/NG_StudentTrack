import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { AllStudentsComponent } from './Components/all-students/all-students.component';
import { AddSubjectComponent } from './Components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './Components/all-subjects/all-subjects.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';
import { DeleteSubjectComponent } from './Components/delete-subject/delete-subject.component';
import { EditSubjectComponent } from './Components/edit-subject/edit-subject.component';
import { ViewAttendanceComponent } from './Components/view-attendance/view-attendance.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AddUserComponent,
    AllUsersComponent,
    AddStudentComponent,
    AllStudentsComponent,
    AddSubjectComponent,
    AllSubjectsComponent,
    DeleteUserComponent,
         UpdateUserComponent,
         EditStudentComponent,
         DeleteStudentComponent,
         DeleteSubjectComponent,
         EditSubjectComponent ,
         AttendanceComponent,
         ViewAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
