import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-verify-profile',
  templateUrl: './verify-profile.component.html',
  styleUrls: ['./verify-profile.component.scss']
})
export class VerifyProfileComponent implements OnInit {
  id: any;
  userdetails: any;
  dumPhoto = 'assets/img/me.jpg';
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';


    constructor(public userService: UserService, public adminService: AdminService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.gethisdetails()

  }


  breadcrumb = [
      {
          title: 'Verify Profile',
          subTitle: 'Dashboard'
      }
  ]

  bookingsListingsBox = [
      {
          customerImg: 'assets/img/dumhis-img.jpg',
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

  gethisdetails() {
    this.userService.viewprofileadmin(this.id)?.subscribe(
      (response: any) => {
        console.log(response);
        this.userdetails = response.data;
        console.log(response.data.Gender);
        if (response.data.Gender == 'Female') {
          this.dumPhoto = this.Photodumwomen;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ApprovePhoto1() {
      const data = {
        Photo1Approve: "Yes"}
     this.adminService.edituserprofile(this.id, data).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ApprovePhoto2() {
    const data = {
      Photo2Approve: "Yes"}
   this.adminService.edituserprofile(this.id, data).subscribe(
    (response: any) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}

ApprovePhoto3() {
  const data = {
    Photo3Approve: "Yes"}
 this.adminService.edituserprofile(this.id, data).subscribe(
  (response: any) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);
}

ApprovePartnerExpectationsApprove() {
  const data = {
    PartnerExpectationsApprove: "Yes"}
 this.adminService.edituserprofile(this.id, data).subscribe(
  (response: any) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);
}
}
