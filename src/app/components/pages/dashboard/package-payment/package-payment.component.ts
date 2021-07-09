import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-payment',
  templateUrl: './package-payment.component.html',
  styleUrls: ['./package-payment.component.scss']
})
export class PackagePaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Package Payment',
        subTitle: 'Dashboard'
    }
]
}
