import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadedfile',
  templateUrl: './uploadedfile.component.html',
  styleUrls: ['./uploadedfile.component.scss']
})
export class UploadedfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Uploaded File',
        subTitle: 'Members'
    }
]
}
