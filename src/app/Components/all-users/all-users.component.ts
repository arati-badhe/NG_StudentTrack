import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  

  constructor(private userService:UserService,private router:Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  users: any;

  getAllUser() {
    this.userService.getAllUser().subscribe((response)=> {
      this.users = response;
    });
  }
  deleteUser(username: any) {
    this.userService.deleteUser(username).subscribe((response) => {
      alert('User deleted');
      this.router.navigate(['/get-all-users']).then(() => {
        window.location.reload();
      });
    });
  }
}

