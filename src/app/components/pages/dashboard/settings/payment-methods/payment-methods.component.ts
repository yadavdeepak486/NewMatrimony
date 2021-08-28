import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  togglepaymentedit:boolean= true;
  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Payment Methods',
        subTitle: 'Settings'
    }
]

editpayment(){
  console.log('button clicked');
  if (this.togglepaymentedit == false) {
    this.togglepaymentedit = true;
  } else {
    this.togglepaymentedit = false;
  }
 
}
}
