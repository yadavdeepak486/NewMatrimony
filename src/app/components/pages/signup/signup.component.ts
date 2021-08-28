import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  togglembcheck: boolean = true;
  defaultValue: any = {
    name: 'Deutschland',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    numericCode: '276',
  };
  sessionid: any;
  hide = true;
  auth: any;
  usertype: any;
  allprofilefor: any;
  allmaritalstatus: any;
  allcountry: any;
  mobilenumber: any;
  signupuser = new FormGroup({
    Profilecreatedby: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Gender: new FormControl('Male', Validators.required),
    dd: new FormControl('1', Validators.required),
    mm: new FormControl('1', Validators.required),
    yyyy: new FormControl('2000', Validators.required),
    DOB: new FormControl(''),
    ConfirmEmail: new FormControl('', Validators.required),
    Maritalstatus: new FormControl('', Validators.required),
    Mobile: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required),
    agree_terms_conditions: new FormControl('1', Validators.required),
  });

  verifyotpform = new FormGroup({
    input1: new FormControl('', Validators.required),
    input2: new FormControl('', Validators.required),
    input3: new FormControl('', Validators.required),
    input4: new FormControl('', Validators.required),
    input5: new FormControl('', Validators.required),
    input6: new FormControl('', Validators.required),
  });
  otpsection = true;
  success = false;
  constructor(
    public userService: UserService,
    private adminService: AdminService,
    public routes: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallreligion();
    this.getallflags();
    this.getmaritalstatus();
  }

  getallreligion() {
    this.userService.getprofilefordd().subscribe(
      (response: any) => {
        //  console.log(response);
        this.allprofilefor = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getmaritalstatus() {
    this.adminService.getallmaritalstatus().subscribe(
      (response: any) => {
        // console.log(response);
        this.allmaritalstatus = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitandmovetootp() {
    console.log(this.signupuser.value);
    const DOBcal = `${this.signupuser.value.yyyy}-${this.signupuser.value.mm}-${this.signupuser.value.dd}`;
    this.signupuser.patchValue({ DOB: DOBcal });
    console.log(this.signupuser.value);
    this.userService.usersignup(this.signupuser.value).subscribe(
      (response: any) => {
        console.log(response);
        this.otpsection = true;
        this.mobilenumber = this.signupuser.value.Mobile;
        this.usertype = response.user_type;
        this.auth = true;
        console.log(response.token);
        localStorage.setItem('auth-token', response.token);
        this.sendotp();
      },
      (error) => {
        this.toastr.error(error.error.msg + ' Please Login');
        this.routes.navigate(['/login']);
      }
    );
  }

  getallflags() {
    this.userService.getallflags().subscribe(
      (response: any) => {
        this.allcountry = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendotp() {
    console.log(this.signupuser.value.Mobile);
    this.userService
      .sendotp({ Mobile: this.signupuser.value.Mobile })
      .subscribe(
        (response: any) => {
          console.log(response);

          console.log(response.response.body);
          const bodyresp = JSON.parse(response.response.body);
          console.log(bodyresp);
          this.sessionid = bodyresp.Details;
          localStorage.setItem('sessionid', this.sessionid);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  resendotp() {
    this.sendotp();
  }

  verifyotp() {
    const mainotp = `${this.verifyotpform.value.input1}${this.verifyotpform.value.input2}${this.verifyotpform.value.input3}${this.verifyotpform.value.input4}${this.verifyotpform.value.input5}${this.verifyotpform.value.input6}`;
    const intotp = parseInt(mainotp, 10);
    console.log(intotp);
    console.log(this.mobilenumber);
    console.log(this.sessionid);
    const getsessionid = localStorage.getItem('sessionid');
    console.log(getsessionid);
    // dd4329b8-9d8a-4137-800d-1b2494a837f0
    const grpobj = {
      otp: intotp,
      Mobile: this.mobilenumber,
      session_id: this.sessionid || getsessionid,
    };
    console.log(grpobj);
    this.userService.verifyotp(grpobj).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Registration successfull');
        this.routes.navigate(['/user-info']);
        localStorage.setItem('sessionid', '');
      },
      (error) => {
        console.log(error);
        this.toastr.success('Incorrect Otp');
      }
    );
  }

  changenumber() {
    console.log('button clicked');
    if (this.togglembcheck == false) {
      this.togglembcheck = true;
    } else {
      this.togglembcheck = false;
    }
  }
}
