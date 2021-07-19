import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smtp-setting',
  templateUrl: './smtp-setting.component.html',
  styleUrls: ['./smtp-setting.component.scss']
})
export class SmtpSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'SMTP Ssttings',
        subTitle: 'Members'
    }
]
}
