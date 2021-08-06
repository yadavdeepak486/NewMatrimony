import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-dashboard-sidemenu',
  templateUrl: './user-dashboard-sidemenu.component.html',
  styleUrls: ['./user-dashboard-sidemenu.component.scss']
})
export class UserDashboardSidemenuComponent implements OnInit {
  checkauth: any;
  logo: any;
  stndpath = 'assets/img/logo.png';
  filepath: any;
  constructor(public userService: UserService, public routes: Router) {
    this.checkauth = localStorage.getItem('auth');
    console.log(this.checkauth);
   }
   
  ngOnInit(): void {
    this.getlogo();
  }

  getlogo() {
    this.userService.getlogo().subscribe(
      (response: any) => {
        this.logo = response.data;
        console.log(this.logo);
        console.log(this.logo.logo);
        this.filepath = this.logo.logo;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
