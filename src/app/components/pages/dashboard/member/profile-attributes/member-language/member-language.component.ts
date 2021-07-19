import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-language',
  templateUrl: './member-language.component.html',
  styleUrls: ['./member-language.component.scss']
})
export class MemberLanguageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'Member Language',
      subTitle: 'Categories'
    }
  ]
}
