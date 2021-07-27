import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-verify-profile',
  templateUrl: './verify-profile.component.html',
  styleUrls: ['./verify-profile.component.scss']
})
export class VerifyProfileComponent implements OnInit {
  id: any;
  userdetails: any;
  constructor(public userService: UserService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
 

  breadcrumb = [
      {
          title: 'Verify Profile',
          subTitle: 'Dashboard'
      }
  ]

  bookingsListingsBox = [
      {
          customerImg: 'assets/img/dummy-img.jpg',
          customerName: 'James Anderson',
          customerNumber: '+214 4455 6521',
          customerEmail: 'hello@james.com',
          title: 'Farmis Hotel & Restaurant',
          bookingsStatus: 'Pending',
          pendingApprovedCanceled: 'pending',
          bookingsInfo: [
              {
                  icon: 'bx bx-map',
                  title: 'Address',
                  text: '40 Journal Square, NG USA',
              },
              {
                  icon: 'bx bx-calendar',
                  title: 'Date',
                  text: '20/05/2020',
              },
              {
                  icon: 'bx bx-purchase-tag',
                  title: 'Price',
                  text: '$1500',
              },
              {
                  icon: 'bx bx-group',
                  title: 'Persons',
                  text: '4 Peoples',
              },
              {
                  icon: 'bx bx-credit-card-front',
                  title: 'Payment',
                  text: 'Paid',
              }
          ]
      },
      {
          customerImg: 'assets/img/user2.jpg',
          customerName: 'Alina Smith',
          customerNumber: '',
          customerEmail: '',
          title: 'Skyview Shopping Cente',
          bookingsStatus: 'Approved',
          pendingApprovedCanceled: 'approved',
          bookingsInfo: [
              {
                  icon: 'bx bx-map',
                  title: 'Address',
                  text: '55 County Laois, Ireland',
              },
              {
                  icon: 'bx bx-calendar',
                  title: 'Date',
                  text: '19/05/2020',
              },
              {
                  icon: 'bx bx-purchase-tag',
                  title: 'Price',
                  text: '$200',
              },
              {
                  icon: 'bx bx-credit-card-front',
                  title: 'Payment',
                  text: 'Paid',
              }
          ]
      },
      {
          customerImg: 'assets/img/user3.jpg',
          customerName: 'James Andy',
          customerNumber: '+214 4455 6521',
          customerEmail: 'hello@andy.com',
          title: 'Gym Training Center',
          bookingsStatus: 'Pending',
          pendingApprovedCanceled: 'pending',
          bookingsInfo: [
              {
                  icon: 'bx bx-map',
                  title: 'Address',
                  text: 'Tilt Tilbury, United Kingdom',
              },
              {
                  icon: 'bx bx-calendar',
                  title: 'Date',
                  text: '18/05/2020',
              },
              {
                  icon: 'bx bx-purchase-tag',
                  title: 'Price',
                  text: '$214',
              },
              {
                  icon: 'bx bx-group',
                  title: 'Persons',
                  text: '2 Peoples',
              },
              {
                  icon: 'bx bx-credit-card-front',
                  title: 'Payment',
                  text: 'Unpaid',
              }
          ]
      },
      {
          customerImg: 'assets/img/user4.jpg',
          customerName: 'Steven Smith',
          customerNumber: '+214 4455 6521',
          customerEmail: 'hello@steven.com',
          title: 'The Magician Restaurant',
          bookingsStatus: 'Canceled',
          pendingApprovedCanceled: 'canceled',
          bookingsInfo: [
              {
                  icon: 'bx bx-map',
                  title: 'Address',
                  text: '40 Journal Square, NG USA',
              },
              {
                  icon: 'bx bx-calendar',
                  title: 'Date',
                  text: '20/05/2020',
              },
              {
                  icon: 'bx bx-purchase-tag',
                  title: 'Price',
                  text: '$1500',
              },
              {
                  icon: 'bx bx-group',
                  title: 'Persons',
                  text: '4 Peoples',
              },
              {
                  icon: 'bx bx-credit-card-front',
                  title: 'Payment',
                  text: 'Unpaid',
              }
          ]
      }
  ]
}
