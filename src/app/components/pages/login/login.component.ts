import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl(''),
  });
  constructor(public userService: UserService, public routes: Router) { }

  ngOnInit(): void {
  }


  setuser() {
    console.log(this.signin.value)
    if (this.signin.value.type == "user") {
      console.log("Welcome user")
      localStorage.setItem('usertype', 'user')
      this.routes.navigate(['/vertical-listings-left-sidebar'])
    } else if (this.signin.value.type == "admin") {
      localStorage.setItem('usertype', 'admin')
      this.routes.navigate(['/dashboard'])
    } else {
      console.log("error")
    }
  }
}
