import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
    selector: 'app-profile-tabs',
    templateUrl: './profile-tabs.component.html',
    styleUrls: ['./profile-tabs.component.scss']
})
export class ProfileTabsComponent implements OnInit {
    userdetails: any
    id: any

    constructor(public userService: UserService, public route: ActivatedRoute) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.viewDetailedProfile(this.id)
    }


    //   pageTitleContent = [
    //     {
    //         title: 'Pricing',
    //         backgroundImage: 'assets/img/page-title/page-title1.jpg'
    //     }
    // ]

    monthlyPricing = [
        {
            singlePricingBox: [
                {
                    title: 'Starter Plan',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: '5 Listing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Non-Featured'
                        },
                        {
                            icon: 'bx bx-check',
                            text: '90 Days Availability'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'One Time Fee'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Multi Team Tasking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Registration & Ticketing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Features'
                        },
                        {
                            icon: 'bx bx-x action-close',
                            text: 'Online Booking'
                        },
                        {
                            icon: 'bx bx-x action-close',
                            text: 'Limited Support'
                        }
                    ],
                    price: '$9.99',
                    buttonText: 'Select Plan',
                    buttonLink: '#'
                },
                {
                    title: 'Advance Plan',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: '5 Listing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Non-Featured'
                        },
                        {
                            icon: 'bx bx-check',
                            text: '90 Days Availability'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'One Time Fee'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Multi Team Tasking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Registration & Ticketing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Features'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Online Booking'
                        },
                        {
                            icon: 'bx bx-x action-close',
                            text: 'Limited Support'
                        }
                    ],
                    price: '$19.99',
                    buttonText: 'Select Plan',
                    buttonLink: '#'
                },
                {
                    title: 'Premium Plan',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: '5 Listing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Non-Featured'
                        },
                        {
                            icon: 'bx bx-check',
                            text: '90 Days Availability'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'One Time Fee'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Multi Team Tasking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Registration & Ticketing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Features'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Online Booking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Limited Support'
                        }
                    ],
                    price: '$29.99',
                    buttonText: 'Select Plan',
                    buttonLink: '#'
                }
            ]
        }
    ]
    yearlyPricing = [
        {
            singlePricingBox: [
                {
                    title: 'Starter Plan',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: '5 Listing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Non-Featured'
                        },
                        {
                            icon: 'bx bx-check',
                            text: '90 Days Availability'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'One Time Fee'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Multi Team Tasking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Registration & Ticketing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Features'
                        },
                        {
                            icon: 'bx bx-x action-close',
                            text: 'Online Booking'
                        },
                        {
                            icon: 'bx bx-x action-close',
                            text: 'Limited Support'
                        }
                    ],
                    price: '$119.99',
                    buttonText: 'Select Plan',
                    buttonLink: '#'
                },
                {
                    title: 'Advance Plan',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: '5 Listing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Non-Featured'
                        },
                        {
                            icon: 'bx bx-check',
                            text: '90 Days Availability'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'One Time Fee'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Multi Team Tasking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Registration & Ticketing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Features'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Online Booking'
                        },
                        {
                            icon: 'bx bx-x action-close',
                            text: 'Limited Support'
                        }
                    ],
                    price: '$129.99',
                    buttonText: 'Select Plan',
                    buttonLink: '#'
                },
                {
                    title: 'Premium Plan',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: '5 Listing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Non-Featured'
                        },
                        {
                            icon: 'bx bx-check',
                            text: '90 Days Availability'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'One Time Fee'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Multi Team Tasking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Registration & Ticketing'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Basic Features'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Online Booking'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Limited Support'
                        }
                    ],
                    price: '$139.99',
                    buttonText: 'Select Plan',
                    buttonLink: '#'
                }
            ]
        }
    ]

    viewDetailedProfile(id) {
        this.userService.viewoneprofile(id).subscribe((response: any) => {
            console.log(response)
            this.userdetails = response.data
        }, (error) => {
            console.log(error)
        })
    }

}