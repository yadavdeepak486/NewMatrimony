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
        this.users = response.data.splice(0, 2);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
