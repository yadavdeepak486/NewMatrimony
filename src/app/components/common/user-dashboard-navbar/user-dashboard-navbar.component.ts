import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user-dashboard-navbar',
  templateUrl: './user-dashboard-navbar.component.html',
  styleUrls: ['./user-dashboard-navbar.component.scss']
})
export class UserDashboardNavbarComponent implements OnInit {
  checkauth: any;

  constructor(public userService: UserService, public routes: Router) { 
    this.checkauth = localStorage.getItem('auth');
    console.log(this.checkauth);
  }

  ngOnInit(): void {
    
  }


  logout() {
    console.log('request logout');
    const setauth = false;
    localStorage.setItem('id', '');
    localStorage.setItem('usertype', '');
    localStorage.setItem('auth', JSON.stringify(setauth));
    localStorage.setItem('TOKEN', '');
    this.checkauth = false;
  }


}
