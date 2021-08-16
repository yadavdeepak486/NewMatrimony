import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  auth: any;
  usertype: any;
  forgotpassword = false;
  verifyotp = false;
  signin = new FormGroup({
    Mobile: new FormControl(''),
    password: new FormControl(''),
    Email: new FormControl(''),
  });

  forgotpasswordform = new FormGroup({
    Mobile: new FormControl(''),
    Email: new FormControl(''),
  });
  constructor(
    public userService: UserService,
    public routes: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  userlogin() {
    console.log(this.signin.value.Mobile);
    function isNumeric(n) {
      console.log(!isNaN(parseFloat(n)) && isFinite(n));
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (isNumeric(this.signin.value.Mobile) == true) {
      console.log('this is a number');
      this.signin.setValue({
        Mobile: this.signin.value.Mobile,
        password: this.signin.value.password,
        Email: '',
      });
      console.log(this.signin.value);
    } else {
      console.log('this is a string');
      this.signin.setValue({
        Mobile: '',
        password: this.signin.value.password,
        Email: this.signin.value.Mobile,
      });
      console.log(this.signin.value);
    }

    this.userService.login(this.signin.value).subscribe(
      (response: any) => {
        this.toastr.success('Welcome to Himachal Matrimony');
        this.auth = true;
        localStorage.setItem('auth-token', response.token);
        console.log(response);
        this.routes.navigate(['/vertical-listings-left-sidebar']);
      },
      (error) => {
        this.toastr.error('Some error occured');
        console.log(error);
      }
    );
  }

  forgetpassword() {
    console.log('forget password');
    this.forgotpassword = true;
  }

  sendotp() {
    console.log(this.forgotpasswordform.value);
    console.log('otp send to mobile');
  }
}
