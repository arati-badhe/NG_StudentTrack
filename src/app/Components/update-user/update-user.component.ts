import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute,private userservice:UserService,private router:Router){

  }
  
  
  selectedUser:any;
  user:any;

  firstName:string="";
  lastName:string="";
  username:string="";
  password:string="";
  email:string="";
  role:string="";

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    
    this.selectedUser=this.activatedRoute.snapshot.paramMap.get('username');
    this.userservice.getUserByUsername(this.selectedUser).subscribe((response)=>{
      this.firstName=response.firstName;
      this.lastName=response.lastName;
      this.username=response.username;
      this.password=response.password;
      this.email=response.email;
      this.role=response.role;
    });
  }
updateUser(){
const user={
  firstName:this.firstName,
  lastName:this.lastName,
  username:this.username,
  password:this.password,
  email:this.email,
  role:this.role
};
this.userservice.updateUser(user).subscribe((response)=>{
  alert("Updated Successfully:"+this.username);
  this.router.navigate(['/get-all-user']);
})
}
}


