import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-otp',
  templateUrl: './set-otp.component.html',
  styleUrls: ['./set-otp.component.scss']
})
export class SetOtpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Set OTP',
        subTitle: 'Members'
    }
]
}
