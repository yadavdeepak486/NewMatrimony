import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-two',
  templateUrl: './user-profile-two.component.html',
  styleUrls: ['./user-profile-two.component.scss']
})
export class UserProfileTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      
  }
  
  
]

verticalListings: number = 1;
}
