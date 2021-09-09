import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-premuim-plan',
  templateUrl: './premuim-plan.component.html',
  styleUrls: ['./premuim-plan.component.scss'],
})
export class PremuimPlanComponent implements OnInit {
  plans: any;
  bplan: any;
  splan: any;
  spplan: any;
  gplan: any;
  gpplan: any;
  userId: any;
  constructor(
    private adminService: AdminService,
    public userService: UserService,
    public toastr: ToastrService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getmyuserid();
    this.getPlans();
    this.getBPlan();
    this.getSPlan();
    this.getSPPlan();
    this.getGPlan();
    this.getGPPlan();
  }

  getPlans() {
    this.adminService.allplans().subscribe(
      (response: any) => {
        console.log(response);
        this.plans = response.data;
      },
      (error) => {
        this.toastr.error('Network Error');
      }
    );
  }

  getBPlan() {
    const id = 'BPlan';
    this.userService.getplan(id).subscribe(
      (response: any) => {
        console.log(response);
        this.bplan = response.data;
      },
      (error) => {
        this.toastr.error('Network Error');
      }
    );
  }

  getSPlan() {
    const id = 'SPlan';
    this.userService.getplan(id).subscribe(
      (response: any) => {
        console.log(response);
        this.splan = response.data;
      },
      (error) => {
        this.toastr.error('Network Error');
      }
    );
  }

  getSPPlan() {
    const id = 'SPPlan';
    this.userService.getplan(id).subscribe(
      (response: any) => {
        console.log(response);
        this.spplan = response.data;
      },
      (error) => {
        this.toastr.error('Network Error');
      }
    );
  }

  getGPlan() {
    const id = 'GPlan';
    this.userService.getplan(id).subscribe(
      (response: any) => {
        console.log(response);
        this.gplan = response.data;
      },
      (error) => {
        this.toastr.error('Network Error');
      }
    );
  }

  getGPPlan() {
    const id = 'GPPlan';
    this.userService.getplan(id).subscribe(
      (response: any) => {
        console.log(response);
        this.gpplan = response.data;
      },
      (error) => {
        this.toastr.error('Network Error');
      }
    );
  }

  allavaillinks() {
    this.userService.getallpaymentlinks().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getmyuserid() {
    this.userService.getmyprofiledetail().subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.data._id);
        this.userId = response.data._id;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  makepaymentreq(planId) {
    this.userService.makepaymentrequest(planId, this.userId).subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.response.payment_request.longurl);
        location.href = response.response.payment_request.longurl;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
