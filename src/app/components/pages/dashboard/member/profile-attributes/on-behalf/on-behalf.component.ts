import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-behalf',
  templateUrl: './on-behalf.component.html',
  styleUrls: ['./on-behalf.component.scss']
})
export class OnBehalfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
      title: 'On Behalves',
      subTitle: 'Categories'
    }
  ]
}
