import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-status',
  templateUrl: './family-status.component.html',
  styleUrls: ['./family-status.component.scss']
})
export class FamilyStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'Family Status',
      subTitle: 'Categories'
    }
  ]
}
