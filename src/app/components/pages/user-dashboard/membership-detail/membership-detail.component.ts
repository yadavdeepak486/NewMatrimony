import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-membership-detail',
  templateUrl: './membership-detail.component.html',
  styleUrls: ['./membership-detail.component.scss'],
})
export class MembershipDetailComponent implements OnInit {
  mydetail: any;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getmydetails();
  }

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
}
