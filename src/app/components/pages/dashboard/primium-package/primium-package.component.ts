import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primium-package',
  templateUrl: './primium-package.component.html',
  styleUrls: ['./primium-package.component.scss']
})
export class PrimiumPackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Premium Package',
        subTitle: 'Dashboard'
    }
]
}
