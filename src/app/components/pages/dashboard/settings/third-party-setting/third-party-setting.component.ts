import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-party-setting',
  templateUrl: './third-party-setting.component.html',
  styleUrls: ['./third-party-setting.component.scss']
})
export class ThirdPartySettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Third Party Setting',
        subTitle: 'Settings'
    }
]
}
