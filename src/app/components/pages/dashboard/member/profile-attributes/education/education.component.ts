import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'Education',
      subTitle: 'Categories'
    }
  ]
}
