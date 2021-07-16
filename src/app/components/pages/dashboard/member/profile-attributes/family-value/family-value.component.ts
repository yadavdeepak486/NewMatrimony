import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-value',
  templateUrl: './family-value.component.html',
  styleUrls: ['./family-value.component.scss']
})
export class FamilyValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'Family Values',
      subTitle: 'Categories'
    }
  ]
}
