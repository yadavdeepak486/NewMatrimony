import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user-dashboard-navbar',
  templateUrl: './user-dashboard-navbar.component.html',
  styleUrls: ['./user-dashboard-navbar.component.scss'],
})
export class UserDashboardNavbarComponent implements OnInit {
  checkauth: any;
  mydetail: any;
  path1 = 'assets/img/user1.jpg';

  constructor(public userService: UserService, public routes: Router) {
    this.checkauth = localStorage.getItem('auth');
    console.log(this.checkauth);
  }

  ngOnInit(): void {
    this.getmydetails();
  }

  logout() {
    console.log('request logout');
    const setauth = false;
    localStorage.setItem('auth-token', '');
    this.routes.navigate(['/']);
    this.checkauth = false;
  }

  getmydetails() {
    this.userService.getmyprofiledetail().subscribe(
      (response: any) => {
        console.log(response);
        this.mydetail = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
