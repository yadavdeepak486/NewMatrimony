import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-otp',
  templateUrl: './set-otp.component.html',
  styleUrls: ['./set-otp.component.scss']
})
export class SetOtpComponent implements OnInit {
  toggleeditotp:boolean= true;
  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Set OTP',
        subTitle: 'Members'
    }
]


editotpchk() {
  console.log('button clicked');
  if (this.toggleeditotp == false) {
    this.toggleeditotp = true;
  } else {
    this.toggleeditotp = false;
  }
 }
}
