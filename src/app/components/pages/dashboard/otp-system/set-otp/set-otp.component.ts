import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-set-otp',
  templateUrl: './set-otp.component.html',
  styleUrls: ['./set-otp.component.scss'],
})
export class SetOtpComponent implements OnInit {
  balance: any;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}
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
}
