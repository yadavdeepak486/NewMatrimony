import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

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
  


}
