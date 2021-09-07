import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-page',
  templateUrl: './add-new-page.component.html',
  styleUrls: ['./add-new-page.component.scss']
})
export class AddNewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Add New Page',
        subTitle: 'Website Setup'
    }
]


}
