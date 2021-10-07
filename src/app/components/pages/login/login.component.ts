import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  auth: any;
  usertype: any;
  usermobile: any;
  sessionid: any;
  mobilenumber: any;
  IP:any;
  Ref:any = "Web";
  forgotpasswordtoggle = false;
  verifyotp = false;
  hide = true;
  changepass = false;
  signin = new FormGroup({
    Mobile: new FormControl(''),
    password: new FormControl(''),
    Email: new FormControl(''),
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
  ) {}

  ngOnInit(): void {
    this.getmyip();
  }

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
        IP: this.IP,
        Ref: this.Ref
      });
      console.log(this.signin.value);
    } else {
      console.log('this is a string');
      this.signin.setValue({
        Mobile: '',
        password: this.signin.value.password,
        Email: this.signin.value.Mobile,
        IP: this.IP,
        Ref: this.Ref
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
        //this.toastr.error(error.error.msg);
        if (error.error.msg == 'User Doesnot Exist') {
          this.stafflogin(this.signin.value);
        } else {
          this.toastr.error(error.error.msg);
        }
      }
    );
  }

  stafflogin(data) {
    console.log('staff login requested');
    console.log(data);
    this.adminService.stafflogin(data).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success(`Welcome ${response?.user?.role?.name}`);
        localStorage.setItem('auth-adtoken', response.token);
        localStorage.setItem('role', response?.user?.role?.name);
        console.log(response.user_type);
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

  finduserandsendotp() {
    console.log(this.forgotpasswordform.value);
    console.log('check if user exist');
    console.log(this.forgotpasswordform.value.Mobile);
    function isNumeric(n) {
      console.log(!isNaN(parseFloat(n)) && isFinite(n));
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (isNumeric(this.forgotpasswordform.value.Mobile) == true) {
      console.log('this is a number');
      this.forgotpasswordform.setValue({
        Mobile: this.forgotpasswordform.value.Mobile,
        Email: '',
      });
      console.log(this.forgotpasswordform.value);
    } else {
      console.log('this is a string');
      this.forgotpasswordform.setValue({
        Mobile: '',
        Email: this.forgotpasswordform.value.Mobile,
      });
      console.log(this.forgotpasswordform.value);
    }

    this.userService.finduser(this.forgotpasswordform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.forgotpasswordtoggle = false;
        this.verifyotp = true;
        this.usermobile = response.data.Mobile;
        console.log(response.data.Mobile);
        //const hidemobile = response.data.Mobile;
        this.mobilenumber = response.data.Mobile;
        var phone = response.data.Mobile;
        phone = phone.toString();
        phone = phone.slice(0, -6) + 'XXXXXX';
        console.log(phone);
        this.usermobile = phone;
        this.sendotp(response.data.Mobile);
      },
      (error) => {
        this.toastr.error(error.error.msg);
        console.log(error);
      }
    );
  }

  onDigitInput(event) {
    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null) return;
    else element.focus();
  }

  sendotp(number) {
    console.log(number);
    this.userService.sendotp({ Mobile: number }).subscribe(
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

  verifyotpsub() {
    const mainotp = `${this.verifyotpform.value.input1}${this.verifyotpform.value.input2}${this.verifyotpform.value.input3}${this.verifyotpform.value.input4}`;
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
        this.verifyotp = false;
        this.changepass = true;
        localStorage.setItem('cookie', this.mobilenumber);
      },
      (error) => {
        console.log(error);
        this.toastr.success('Incorrect Otp');
      }
    );
  }

  submitchnpass() {
    const getmobile = localStorage.getItem('cookie');

    if (this.mobilenumber !== null) {
      this.changepasswordform.get('Mobile').setValue(this.mobilenumber);
    }
    this.changepasswordform.get('Mobile').setValue(getmobile);
    console.log(getmobile);
    console.log(this.changepasswordform.value);

    this.userService.resetpassword(this.changepasswordform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Password Reset Successfull');
        localStorage.removeItem('cookie');
        this.changepasswordform.reset();
        this.changepass = false;
      },
      (error) => {
        this.toastr.error(error.error.msg);
        console.log(error);
      }
    );
  }

  getmyip() {
    this.userService.getmyip().subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.ip_address);
        this.IP = response.ip_address
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
