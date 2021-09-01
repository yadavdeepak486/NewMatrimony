import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-payment',
  templateUrl: './package-payment.component.html',
  styleUrls: ['./package-payment.component.scss']
})
export class PackagePaymentComponent implements OnInit {
  toggleeditpackage:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Package Payment',
        subTitle: 'Dashboard'
    }
]

addpackagepayment(){
  console.log('button clicked');
  if (this.toggleeditpackage == false) {
    this.toggleeditpackage = true;
  } else {
    this.toggleeditpackage = false;
  }
}
}
