import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.scss']
})
export class AddNewMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Add New Member',
        subTitle: 'Free Member'
    }
]
}