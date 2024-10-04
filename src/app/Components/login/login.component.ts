import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any;
  password:any;
  constructor(private authservice:AuthService,private router:Router){}
  loginUser(){
    this.authservice.loginUser(this.username,this.password).subscribe((response)=>{
      if(response!=null){
        this.router.navigate(['/home']);
  
      }
      else{
        alert("Invalid credentials");
      }
    });
    
  }
}
