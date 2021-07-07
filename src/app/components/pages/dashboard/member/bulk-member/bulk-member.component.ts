import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-member',
  templateUrl: './bulk-member.component.html',
  styleUrls: ['./bulk-member.component.scss']
})
export class BulkMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  breadcrumb = [
    {
        title: 'Bulk Member',
        subTitle: 'Members'
    }
]

}
