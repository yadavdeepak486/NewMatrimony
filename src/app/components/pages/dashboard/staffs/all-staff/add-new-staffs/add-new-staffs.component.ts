import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-staffs',
  templateUrl: './add-new-staffs.component.html',
  styleUrls: ['./add-new-staffs.component.scss']
})
export class AddNewStaffsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Add New Staffs',
        subTitle: 'All Staffs'
    }
]
}
