import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user-dashboard-navbar',
  templateUrl: './user-dashboard-navbar.component.html',
  styleUrls: ['./user-dashboard-navbar.component.scss'],
})
export class UserDashboardNavbarComponent implements OnInit {
  useDefault: any
  checkauth: any;
  mydetail: any;
  path1 = 'assets/img/user1.jpg';
  data ={
    OnlineUsers:""
  }

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
        this.useDefault = this.mydetail.OnlineUsers == 1?true:false
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggle(event: MatSlideToggleChange) {
    console.log(this.mydetail.OnlineUsers)
    console.log('toggle', this.mydetail.OnlineUsers == 0 ?event.checked:!event.checked);
    console.log('toggle', event.checked);
        this.useDefault = event.checked;
        const changevalue = event.checked?'1':'0'
        this.data.OnlineUsers = changevalue
        console.log(this.data)
    this.userService.addotheruserdetails(this.data).subscribe(
      (response: any) => {
        console.log(response);
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
