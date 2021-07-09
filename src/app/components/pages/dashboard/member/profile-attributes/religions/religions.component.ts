import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-religions',
  templateUrl: './religions.component.html',
  styleUrls: ['./religions.component.scss']
})
export class ReligionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Religions',
        subTitle: 'Members'
    }
]

}
