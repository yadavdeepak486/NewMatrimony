import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  toggleaddpage: boolean = true;
  toggleeditpage: boolean = true;

  pageform = new FormGroup({
    path: new FormControl(),
    pagetitle: new FormControl(),
    html: new FormControl(),
  });
  constructor(public adminService: AdminService) {}

  ngOnInit(): void {}
  breadcrumb = [
    {
      title: 'All Pages',
      subTitle: 'Dashboard',
    },
  ];

  addpage() {
    console.log('button clicked');
    if (this.toggleaddpage == false) {
      this.toggleaddpage = true;
    } else {
      this.toggleaddpage = false;
    }
  }

  editpage() {
    console.log('button clicked');
    if (this.toggleeditpage == false) {
      this.toggleeditpage = true;
    } else {
      this.toggleeditpage = false;
    }
  }

  uploadpage() {
    console.log(this.pageform.value);
  }
}
