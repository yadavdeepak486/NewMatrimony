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
  stndpath = 'assets/img/logo.png';
  filepath: any;
  // hide = true;
  // allprofilefor: any;
  // signupuser = new FormGroup({
  //   Profilecreatedby: new FormControl(
  //     '60eeb7fa0e58d35d2c4f4f4a',
  //     Validators.required
  //   ),
  //   firstName: new FormControl('', Validators.required),
  //   LastName: new FormControl('', Validators.required),
  //   Gender: new FormControl('Male', Validators.required),
  //   dd: new FormControl('1', Validators.required),
  //   mm: new FormControl('1', Validators.required),
  //   yyyy: new FormControl('2000', Validators.required),
  //   DOB: new FormControl(''),
  //   ConfirmEmail: new FormControl('', Validators.required),
  //   Mobile: new FormControl('', Validators.required),
  //   ConfirmPassword: new FormControl('', Validators.required),
  //   agree_terms_conditions: new FormControl('', Validators.required),
  // });
  // success = false;

  // signin = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   type: new FormControl(''),
  // });

  // mobilenumber = 91987654321;

  constructor(public userService: UserService, public routes: Router) {
    let auth = localStorage.getItem('auth');
    if (auth) {
      this.checkauth = true;
      console.log(this.checkauth);
    }
  }

  ngOnInit(): void {
    this.getlogo();
  }

  // getallreligion() {
  //   this.userService.getprofilefordd().subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.allprofilefor = response.data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // setuser() {
  //   console.log(this.signin.value);
  //   if (this.signin.value.type == 'user') {
  //     console.log('Welcome user');
  //     localStorage.setItem('usertype', 'user');
  //     this.routes.navigate(['/vertical-listings-left-sidebar']);
  //   } else if (this.signin.value.type == 'admin') {
  //     localStorage.setItem('usertype', 'admin');
  //     this.routes.navigate(['/dashboard']);
  //   } else {
  //     console.log('error');
  //   }
  // }

  // submitandmovetootp() {
  //   console.log(this.signupuser.value);
  //   const DOBcal = `${this.signupuser.value.yyyy}-${this.signupuser.value.mm}-${this.signupuser.value.dd}`;
  //   this.signupuser.patchValue({ DOB: DOBcal });
  //   console.log(this.signupuser.value);
  //   this.userService.usersignup(this.signupuser.value).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
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
    localStorage.setItem('id', '');
    localStorage.setItem('usertype', '');
    localStorage.setItem('auth', JSON.stringify(setauth));
    localStorage.setItem('TOKEN', '');
    this.checkauth = false;
  }
}
