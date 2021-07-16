import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marital-statuses',
  templateUrl: './marital-statuses.component.html',
  styleUrls: ['./marital-statuses.component.scss']
})
export class MaritalStatusesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'Marital Statuses',
      subTitle: 'Categories'
    }
  ]
}
