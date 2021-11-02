import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss'],
})
export class NavbarStyleOneComponent implements OnInit {
  checkauth = false;
  abcd = false;
  logo: any;

  mydetail: any;
  stndpath = 'assets/img/logo.png';
  userpath = 'assets/img/user1.png';
  filepath: any;

  constructor(public userService: UserService, public routes: Router) {}

  ngOnInit(): void {
    this.getlogo();
    this.getmydetails();
    let auth = localStorage.getItem('auth-token');
    if (auth) {
      this.checkauth = true;
      console.log(this.checkauth);
    }
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

  logout() {
    console.log('request logout');
    const setauth = false;
    localStorage.setItem('auth-token', '');
    this.checkauth = false;
    this.routes.navigate(['/']).then(() => {
      window.location.reload();
    });;
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
