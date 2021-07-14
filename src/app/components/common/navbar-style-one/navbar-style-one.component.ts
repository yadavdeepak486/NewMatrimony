import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {

  hide = true;
  allprofilefor: any;
  signupuser = new FormGroup({
    Profilecreatedby: new FormControl(''),
    firstName: new FormControl(''),
    LastName: new FormControl(''),
    Gender: new FormControl(''),
    DD: new FormControl(''),
    MM: new FormControl(''),
    YYYY: new FormControl(''),
    ConfirmEmail: new FormControl(''),
    Mobile: new FormControl(''),
    ConfirmPassword: new FormControl(''),
    agree_terms_conditions: new FormControl(''),
  });

  signin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl(''),
  });

  mobilenumber = 91987654321;
  constructor(public userService: UserService, public routes: Router) { }

  ngOnInit(): void {
    this.getallreligion()
  }


  getallreligion() {
    this.userService.getprofilefordd().subscribe((response: any) => {
      console.log(response)
      this.allprofilefor = response.data
    }, (error) => {
      console.log(error)
    })
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
    // localStorage.setItem(user:)
  }
  // usersignup() {
  //   this.userService.usersignup(this.signupuser.value).subscribe((response: any) => {
  //     console.log(response)
  //   }, (error) => {
  //     console.log(error)
  //   })
  // }

  movetootp() {
    console.log(this.signupuser.value)
  }
}
