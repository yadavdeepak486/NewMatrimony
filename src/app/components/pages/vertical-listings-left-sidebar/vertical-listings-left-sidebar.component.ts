import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vertical-listings-left-sidebar',
  templateUrl: './vertical-listings-left-sidebar.component.html',
  styleUrls: ['./vertical-listings-left-sidebar.component.scss'],
})
export class VerticalListingsLeftSidebarComponent implements OnInit {
  users: any;
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.resetOption = [this.options[0]];
    this.getallUsers();
  }

  pageTitleContent = [
    {
      title: 'Find Popular Places',
    },
  ];

  // Category Select
  singleSelect: any = [];
  multiSelect: any = [];
  stringArray: any = [];
  objectsArray: any = [];
  resetOption: any;
  config = {
    displayKey: 'name',
    search: true,
  };
  options = [
    // Type here your category name
    {
      name: 'Restaurants',
    },
    {
      name: 'Events',
    },
    {
      name: 'Clothing',
    },
    {
      name: 'Bank',
    },
    {
      name: 'Fitness',
    },
    {
      name: 'Bookstore',
    },
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
      name: 'Recommended',
    },
    {
      name: 'Default',
    },
    {
      name: 'Popularity',
    },
    {
      name: 'Latest',
    },
    {
      name: 'Price: low to high',
    },
    {
      name: 'Price: high to low',
    },
  ];

  // All Listings
  singleListingsItem = [
    {
      mainImg: 'assets/img/listings/listings9.png',
      categoryLink: 'profile-detail',
      bookmarkLink: 'single-listings',
      category: 'Restaurant',
      location: 'New York,',
      title: 'Lorem',
      price: 'Start From: $121',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',
      openORclose: 'Premium',
      extraClass: 'status-open',
      rating: [
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
      ],
      ratingCount: '18',
    },
    {
      mainImg: 'assets/img/listings/listings10.png',
      categoryLink: 'profile-detail',
      bookmarkLink: 'single-listings',
      category: 'Hotel',
      location: 'Los Angeles',
      title: 'Lorem1',
      price: 'Start From: $200',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user2.jpg',
      authorName: 'Sarah',
      openORclose: 'Premium',
      extraClass: 'status-open',
      rating: [
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
      ],
      ratingCount: '10',
    },
    {
      mainImg: 'assets/img/listings/listings11.png',
      categoryLink: 'profile-detail',
      bookmarkLink: 'single-listings',
      category: 'Shopping',
      location: 'Seattle, USA',
      title: 'Lorem2',
      price: 'Start From: $500',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user5.jpg',
      authorName: 'Lina',
      openORclose: 'Premium',
      extraClass: 'status-open',
      rating: [
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
      ],
      ratingCount: '55',
    },
    {
      mainImg: 'assets/img/listings/listings12.png',
      categoryLink: 'profile-detail',
      bookmarkLink: 'single-listings',
      category: 'Restaurant',
      location: 'New York,',
      title: 'Lorem3',
      price: 'Start From: $150',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user1.jpg',
      authorName: 'Taylor',
      openORclose: 'Premium',
      extraClass: 'status-close',
      rating: [
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
      ],
      ratingCount: '45',
    },
    {
      mainImg: 'assets/img/listings/listings17.jpg',
      categoryLink: 'profile-detail',
      bookmarkLink: 'single-listings',
      category: 'Restaurant',
      location: 'New York,',
      title: 'Lorem3',
      price: 'Start From: $150',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user2.jpg',
      authorName: 'Sarah',
      openORclose: 'Premium',
      extraClass: 'status-close',
      rating: [
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
      ],
      ratingCount: '45',
    },
    {
      mainImg: 'assets/img/listings/listings16.jpg',
      categoryLink: 'profile-detail',
      bookmarkLink: 'single-listings',
      category: 'Shopping',
      location: 'Seattle',
      title: 'Lorem4',
      price: 'Start From: $500',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user5.jpg',
      authorName: 'Lina',
      openORclose: 'Premium',
      extraClass: 'status-open',
      rating: [
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
      ],
      ratingCount: '55',
    },
  ];

  verticalListings: number = 1;

  getallUsers() {
    this.userService.getallprofiles().subscribe(
      (response: any) => {
        console.log(response);
        this.users = response.data;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  userDetails(id: number) {
    this.router.navigate(['profile-detail', id]);
  }

  sendinterest(id) {
    console.log(id);
    this.userService.sendinterest(id).subscribe(
      (response: any) => {
        console.log(response);
        //this.users = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
