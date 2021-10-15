import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  auth: any;
  usertype: any;
  usermobile: any;
  sessionid: any;
  mobilenumber: any;
  IP:any="122.175.197.185"
  Ref:any = "Web";
  forgotpasswordtoggle = false;
  verifyotp = false;
  hide = true;
  changepass = false;
  signin = new FormGroup({
    Mobile: new FormControl(''),
    password: new FormControl(''),
    IP: new FormControl(''),
    Ref: new FormControl(''),
  });

  forgotpasswordform = new FormGroup({
    Mobile: new FormControl(''),
    Email: new FormControl(''),
  });

  verifyotpform = new FormGroup({
    input1: new FormControl('', Validators.required),
    input2: new FormControl('', Validators.required),
    input3: new FormControl('', Validators.required),
    input4: new FormControl('', Validators.required),

  });

  changepasswordform = new FormGroup({
    Mobile: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
  });

  constructor(
    public userService: UserService,
    public adminService: AdminService,
    public routes: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  adminlogin() {
    console.log('staff login requested');
    console.log(this.signin.value);
    this.adminService.stafflogin(this.signin.value).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('auth-adtoken', response.token);
        this.routes.navigate(['/dashboard']);
      },
      (error) => {
        this.toastr.error(error.error.msg);
        console.log(error);
      }
    );
  }

  forgetpassword() {
    console.log('forget password');
    this.forgotpasswordtoggle = true;
  }
}
