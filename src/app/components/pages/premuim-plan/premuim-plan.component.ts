import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';
import { WindowRefService } from 'src/app/window-ref.service';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';
import { Router } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'app-premuim-plan',
  templateUrl: './premuim-plan.component.html',
  styleUrls: ['./premuim-plan.component.scss'],
  providers: [WindowRefService],
})
export class PremuimPlanComponent implements OnInit {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  plans: any;
  bplan: any;
  splan: any;
  spplan: any;
  gplan: any;
  gpplan: any;
  userId: any;

  ///
  order_id: any;
  amount: any;
  buyer_name: any;
  description: any;
  contact: any;
  email: any;
  planId: any;
  key:any


  constructor(
    private adminService: AdminService,
    public userService: UserService,
    public toastr: ToastrService,
    public platform: Platform,
    private winRef: WindowRefService,
    private routes: Router
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

  rapayorder(planId,rate) {
    this.planId = planId;
    console.log('%cpremuim-plan.component.ts line:192 rate', 'color: #007acc;', rate);
    this.userService.rapayorder(planId,rate).subscribe(
      (response: any) => {
        console.log(response);
        this.order_id = response.order.id;
        this.amount = response.order.amount;
        this.buyer_name = response.data.buyer_name;
        this.contact = response.data.phone;
        this.email = response.data.email;
        this.description = response.order.receipt;
        this.key = response.data.key;
        this.payWithRazor();
      },
      (error) => {
        console.log(error);
      }
    );
  }



  createRzpayOrder(data) {
    console.log(data);
    // call api to create order_id
    this.payWithRazor();
  }

  payWithRazor() {
    //const val = 'order_I3yuJcOmqHIZfj';
    const options: any = {
      key: this.key,
      amount: this.amount,
      currency: 'INR',
      name: this.buyer_name,
      description: this.description,
      // image:
      //   'https://storage.googleapis.com/endless-set-315803.appspot.com/instagram-96x96-1597575.png',
      order_id: this.order_id,
      modal: {

        escape: false,
      },
      prefill: {
        contact: this.contact,
        email: this.email,
      },
      external: {
        wallets: ['phonepe'],
      },
      send_sms_hash: true,
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a',
      },
    };
    options.handler = (response, error) => {
      if (response) {
        options.response = response;
        console.log(response);
        this.checkpaymentsuccessfull(response);
        console.log(options);
      }
      if (error) {
        console.log(error);
        this.toastr.error('Error occurred');
      }

      // call your backend api to verify payment signature & capture transaction
    };
    options.modal.ondismiss = () => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
      this.toastr.error('Error occurred');
    };
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

  checkpaymentsuccessfull(data) {
    console.log(data);
    this.userService.rapaysuccesscheck(data, this.planId).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Payment successfull');
        this.routes.navigate(['/membership-detail']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
