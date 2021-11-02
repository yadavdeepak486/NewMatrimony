import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-membership-detail',
  templateUrl: './membership-detail.component.html',
  styleUrls: ['./membership-detail.component.scss'],
})
export class MembershipDetailComponent implements OnInit {
  mydetail: any;
  chatpercetage: any;
  contactpercetage: any;
  expirydays: any;
  expirypercentage: any;
  days: any;
  Hours: any;
  Minutes: any;
  Seconds: any;
  newdays: any;
  seconds_left: any;

  subject = new BehaviorSubject(0);
  private subscription: Subscription;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getmydetails();
    this.subscription = interval(1000*60)
           .subscribe(x => { this.getmydetails(); });

  }

  getmydetails() {
    this.userService.getmyprofiledetail().subscribe(
      (response: any) => {
        // console.log(response);
        this.mydetail = response.data;
        this.chatpercetage =
          (this.mydetail?.chat_bal * 100) / this.mydetail?.chat_total;
        this.contactpercetage =
          (this.mydetail?.view_contact_bal * 100) /
          this.mydetail?.view_contact_total;

        this.days =
          (this.mydetail?.MemshipExpiryDate - Date.now()) /
          (24 * 60 * 60 * 1000);

        // this.Hours = this.mydetail?.MemshipExpiryDate-TimeRanges.nom

        var current_date = new Date().getTime();
        this.seconds_left =
          (this.mydetail?.MemshipExpiryDate - current_date) / 1000;

        this.newdays = this.seconds_left / 86400;
        this.seconds_left = this.seconds_left % 86400;

        this.Hours = this.seconds_left / 3600;
        this.seconds_left = this.seconds_left % 3600;

        this.Minutes = this.seconds_left / 60;

        this.expirypercentage =
          (((this.mydetail?.MemshipExpiryDate - Date.now()) /
            (24 * 60 * 60 * 1000)) *
            100) /
          (this.mydetail?.MemshipExpiryDate - this.mydetail?.PlanPurchaseDate) /
          (24 * 60 * 60 * 1000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
