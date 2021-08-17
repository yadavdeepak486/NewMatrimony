import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-vertical-listings-left-sidebar',
  templateUrl: './vertical-listings-left-sidebar.component.html',
  styleUrls: ['./vertical-listings-left-sidebar.component.scss'],
})
export class VerticalListingsLeftSidebarComponent implements OnInit {
  users: any;
  ngStyle: boolean = false;

  allmaritalstatus:any;
  allreligion:any;
  allcountry: any;
  allstate: any;
  allcity: any;
  allcaste:any;
  allheights: any;
  alllanguage: any;
  
  //maritalstatus = new FormControl();
  maritalstatusList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    public userService: UserService,
    public adminService: AdminService,
    private router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.resetOption = [this.options[0]];
    this.getallUsers();
    this.getmaritalstatus();
    this.getallreligion();
    this.allcountrys();
    this.allstate();
    this.allcity();
    this.getallheights();
    this.getalllanguage()
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


  getmaritalstatus() {
    this.adminService.getallmaritalstatus().subscribe(
      (response: any) => {
        // console.log(response);
        this.allmaritalstatus = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallreligion() {
    this.adminService.getallreligion().subscribe(
      (response: any) => {
        this.allreligion = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  allcountrys() {
    this.adminService.allcountry().subscribe(
      (response: any) => {
        this.allcountry = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

  stateofcountry(id) {
    console.log(id);
    this.adminService.statebycountry(id).subscribe(
      (response: any) => {
        this.allstate = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cityofstate(id) {
    console.log(id);
    this.adminService.citybystate(id).subscribe(
      (response: any) => {
        this.allcity = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  castofrelgion(id) {
    console.log(id);
    this.adminService.castesofreligion(id).subscribe(
      (response: any) => {
        this.allcaste = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallheights() {
    this.adminService.getallheight().subscribe(
      (response: any) => {
        this.allheights = response.data;
        // console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getalllanguage() {
    this.adminService.getalllanguage().subscribe(
      (response: any) => {
        this.alllanguage = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

 
  getallUsers() {
    this.userService.getallprofiles().subscribe(
      (response: any) => {
        console.log(response);
        // if(response.data.photo_privacy){
        //   this.ngStyle = true
        // }
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
        this.toastr.success('Interest sent successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addtoshortlist(id) {
    console.log(id);
    this.userService.addtoshortlist(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Added to sortlist');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendphotoreq(id) {
    // console.log(id);
    this.userService.sendphotoreq(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Photo request sent');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  startchat(id) {
    // console.log(id);
    this.userService.createchatroom(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Chat room');
        this.router.navigate(['user-dashboard/user-chat']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
