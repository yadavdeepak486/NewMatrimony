import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-verify-member',
  templateUrl: './verify-member.component.html',
  styleUrls: ['./verify-member.component.scss']
})
export class VerifyMemberComponent implements OnInit {

  constructor(public adminServie: AdminService) { }

 
  ngOnInit(): void {
    this.resetOption = [this.options[0]]; 
   
  }
  
  pageTitleContent = [
    {
        title: 'Find Popular Places'
    }
]

// Category Select
singleSelect: any = [];
multiSelect: any = [];
stringArray: any = [];
objectsArray: any = [];
resetOption: any;
config = {
    displayKey: "name",
    search: true
};
options = [
    // Type here your category name
    {
        name: "name",
    },
    {
        name: "lorem",
    },
    {
        name: "lorem",
    }
    
];
searchChange($event) {
    console.log($event);
}
reset() {
    this.resetOption = [];
}
// Ordering Select
options2 = [
    {
        name: "Recommended",
    },
    {
        name: "Default",
    },
    {
        name: "Popularity",
    },
    {
        name: "Latest",
    }
    
];
// Distance Select
options3 = [
    {
        name: "Driving (5 mi.)",
    },
    {
        name: "Walking (1 mi.)",
    },
    {
        name: "Biking (2 mi.)",
    },
    {
        name: "Within 4 blocks",
    },
    {
        name: "Bicycle (6 mi.)",
    }
];

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
    {
      mainImg: 'assets/img/user1.png',
      
      category: 'Restaurant',
      location: 'New York, USA',
      title: 'Himanshi Sharma',
      online: 'Online',
      detailsLink: '',
      extraClass: 'status-open',
    },
    {
      mainImg: 'assets/img/user1.png',
      
      category: 'Restaurant',
      location: 'New York, USA',
      title: 'Himanshi Sharma',
      online: 'Online',
      detailsLink: '',
      extraClass: 'status-open',
    },
    {
      mainImg: 'assets/img/user1.png',
      
      category: 'Restaurant',
      location: 'New York, USA',
      title: 'Himanshi Sharma',
      online: 'Online',
      detailsLink: '',
      extraClass: 'status-open',
    },
    {
      mainImg: 'assets/img/user1.png',
      
      category: 'Restaurant',
      location: 'New York, USA',
      title: 'Himanshi Sharma',
      online: 'Online',
      detailsLink: '',
      extraClass: 'status-open',
    },
    {
      mainImg: 'assets/img/user1.png',
      
      category: 'Restaurant',
      location: 'New York, USA',
      title: 'Himanshi Sharma',
      online: 'Online',
      detailsLink: '',
      extraClass: 'status-open',
    }
]

verticalListings: number = 1;


  breadcrumb = [
    {
      title: 'Verify member List',
      subTitle: 'Members'
    }
  ]


}
