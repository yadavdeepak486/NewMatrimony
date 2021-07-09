import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy-stories',
  templateUrl: './happy-stories.component.html',
  styleUrls: ['./happy-stories.component.scss']
})
export class HappyStoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Happy Stories',
        subTitle: 'Dashboard'
    }
]
}
