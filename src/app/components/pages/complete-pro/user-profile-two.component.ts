import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-profile-two',
  templateUrl: './user-profile-two.component.html',
  styleUrls: ['./user-profile-two.component.scss'],
})
export class UserProfileTwoComponent implements OnInit {
  mydetail: any;
  users: any;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getmydetails();
    this.getallUsers();
  }

  // All Listings
  singleListingsItem = [
    {
      mainImg: 'assets/img/user1.png',

      category: 'Restaurant',
      location: 'New York, USA',
      title: 'Himanshi Sharma',
      online: 'Online',
      detailsLink: '',
      extraClass: 'status-open',
    },
  ];

  verticalListings: number = 1;
  getmydetails() {
    this.userService.getmyprofiledetail().subscribe(
      (response: any) => {
        console.log(response);
        this.mydetail = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallUsers() {
    this.userService.getallprofiles().subscribe(
      (response: any) => {
        console.log(response);
        this.users = response.data.splice(0,2);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
