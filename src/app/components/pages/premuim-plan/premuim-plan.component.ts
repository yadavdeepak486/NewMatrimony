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
  constructor(
    private adminService: AdminService,
    public userService: UserService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPlans();
    this.getBPlan();
  }
  //   monthlyPricing = [
  //     {
  //         singlePricingBox: [
  //             {
  //                 title: 'Gold ',
  //                 features: [
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '5 Listing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Non-Featured'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '90 Days Availability'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'One Time Fee'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Multi Team Tasking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Registration & Ticketing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Features'
  //                     },
  //                     {
  //                         icon: 'bx bx-x action-close',
  //                         text: 'Online Booking'
  //                     },
  //                     {
  //                         icon: 'bx bx-x action-close',
  //                         text: 'Limited Support'
  //                     }
  //                 ],
  //                 price: '$9.99',
  //                 buttonText: 'Select Plan',
  //                 buttonLink: '#'
  //             },
  //             {
  //                 title: 'SILVER Memberships Plan',
  //                 features: [
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '5 Listing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Non-Featured'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '90 Days Availability'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'One Time Fee'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Multi Team Tasking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Registration & Ticketing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Features'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Online Booking'
  //                     },
  //                     {
  //                         icon: 'bx bx-x action-close',
  //                         text: 'Limited Support'
  //                     }
  //                 ],
  //                 price: '$19.99',
  //                 buttonText: 'Select Plan',
  //                 buttonLink: '#'
  //             },
  //             {
  //                 title: 'GOLDEN Membership Plan',
  //                 features: [
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '5 Listing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Non-Featured'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '90 Days Availability'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'One Time Fee'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Multi Team Tasking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Registration & Ticketing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Features'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Online Booking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Limited Support'
  //                     }
  //                 ],
  //                 price: '$29.99',
  //                 buttonText: 'Select Plan',
  //                 buttonLink: '#'
  //             },
  //             {
  //                 title: 'GOLDEN Membership Plan',
  //                 features: [
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '5 Listing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Non-Featured'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '90 Days Availability'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'One Time Fee'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Multi Team Tasking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Registration & Ticketing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Features'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Online Booking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Limited Support'
  //                     }
  //                 ],
  //                 price: '$29.99',
  //                 buttonText: 'Select Plan',
  //                 buttonLink: '#'
  //             },
  //             {
  //                 title: 'GOLDEN Membership Plan',
  //                 features: [
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '5 Listing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Non-Featured'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: '90 Days Availability'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'One Time Fee'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Multi Team Tasking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Registration & Ticketing'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Basic Features'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Online Booking'
  //                     },
  //                     {
  //                         icon: 'bx bx-check',
  //                         text: 'Limited Support'
  //                     }
  //                 ],
  //                 price: '$29.99',
  //                 buttonText: 'Select Plan',
  //                 buttonLink: '#'
  //             }
  //         ]
  //     }
  // ]

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
    this.userService.getbplan().subscribe(
      (response: any) => {
        console.log(response);
        this.bplan = response.data;
      },
      (error) => {
        this.toastr.error('Network Error');
      }
    );
  }
}
