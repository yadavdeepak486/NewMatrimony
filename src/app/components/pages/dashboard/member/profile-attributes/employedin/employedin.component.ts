import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employedin',
  templateUrl: './employedin.component.html',
  styleUrls: ['./employedin.component.scss']
})
export class EmployedinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'Employedin',
      subTitle: 'Categories'
    }
  ]
}
