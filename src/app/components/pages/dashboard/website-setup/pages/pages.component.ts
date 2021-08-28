import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  toggleaddpage: boolean= true;
  toggleeditpage: boolean= true;
  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'All Pages',
        subTitle: 'Dashboard'
    }
]

addpage(){
  console.log('button clicked');
  if (this.toggleaddpage == false) {
    this.toggleaddpage = true;
  } 
  else {
    this.toggleaddpage = false;
  }
  }

  editpage(){
    console.log('button clicked');
    if (this.toggleeditpage == false) {
      this.toggleeditpage = true;
    } 
    else {
      this.toggleeditpage = false;
    }
    }
}
