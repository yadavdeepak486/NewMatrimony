import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-set-otp',
  templateUrl: './set-otp.component.html',
  styleUrls: ['./set-otp.component.scss'],
})
export class SetOtpComponent implements OnInit {
  balance: any;
  allcreds: any;

  otpcredform = new FormGroup({
    provider: new FormControl(''),
    apikey: new FormControl(''),
    templatename: new FormControl(''),
  });

  editotpcredform = new FormGroup({
    id: new FormControl(''),
    provider: new FormControl(''),
    apikey: new FormControl(''),
    templatename: new FormControl(''),
  });

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getallcreds();
  }
  breadcrumb = [
    {
      title: 'Set OTP',
      subTitle: 'Members',
    },
  ];

  otpbalance() {
    console.log('requested otp');
    this.adminService.otpbal().subscribe(
      (response: any) => {
        console.log(response);
        this.balance = response.Details;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleeditotp: boolean = true;

  editotpchk(id) {
    console.log('button clicked');
    console.log(id);
    if (this.toggleeditotp == false) {
      this.toggleeditotp = true;
    } else {
      this.toggleeditotp = false;
    }
    this.adminService.viewoneotpcred(id).subscribe(
      (response: any) => {
        console.log(response);
        this.editotpcredform.setValue({
          id: response.data?._id ? response.data?._id : null,
          provider: response.data?.provider ? response.data?.provider : null,
          apikey: response.data?.apikey ? response.data?.apikey : null,
          templatename: response.data?.templatename
            ? response.data?.templatename
            : null,
        });
        console.log(this.editotpcredform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitotpcredform() {
    console.log(this.otpcredform.value);
    this.adminService.addotpcredential(this.otpcredform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.otpcredform.reset();
        this.getallcreds();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateotpcredform() {
    console.log(this.editotpcredform.value);
    this.adminService
      .editoneotpcred(this.editotpcredform.value.id, this.editotpcredform.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.toggleeditotp = true;
          this.editotpcredform.reset();
          this.getallcreds();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getallcreds() {
    this.adminService.allotpcredential().subscribe(
      (response: any) => {
        console.log(response);
        this.allcreds = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelform() {
    this.toggleeditotp = true;
    this.editotpcredform.reset();
  }

  deleteotpchk(id) {
    this.adminService.deleteoneotpcred(id).subscribe(
      (response: any) => {
        console.log(response);
        this.getallcreds();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
