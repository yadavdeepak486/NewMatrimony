import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moonsign',
  templateUrl: './moonsign.component.html',
  styleUrls: ['./moonsign.component.scss']
})
export class MoonsignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'Moonsign',
      subTitle: 'Categories'
    }
  ]
}
