import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-homeone-listings',
  templateUrl: './homeone-listings.component.html',
  styleUrls: ['./homeone-listings.component.scss'],
})
export class HomeoneListingsComponent implements OnInit {
  allstory: any;
  mainImg: any;
  constructor(
    public adminService: AdminService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallhappystories();
  }

  sectionTitle = [
    {
      title: 'Just Get Married Happy Couple',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.',
    },
  ];
  singleListingsBox = [
    {
      mainImg: [
        {
          img: 'assets/img/list_b.jpg',
        },
      ],
      categoryLink: 'single-listings',
      category: 'Restaurant',
      bookmarkLink: 'single-listings',
      location: 'New York, USA',
      title: 'Chipotle Mexican Grill',
      price: 'Start From: $150',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user1.jpg',
      openORclose: 'Open Now',
      extraClass: 'status-open',
      authorName: 'Taylor',
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
      mainImg: [
        {
          img: 'assets/img/listings/list_c.jpg',
        },
        {
          img: 'assets/img/listings/list_b.jpg',
        },
      ],
      categoryLink: 'single-listings',
      category: 'Hotel',
      bookmarkLink: 'single-listings',
      location: 'Los Angeles, USA',
      title: 'The Beverly Hills Hotel',
      price: 'Start From: $200',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user2.jpg',
      openORclose: 'Open Now',
      extraClass: 'status-open',
      authorName: 'Sarah',
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
          icon: 'bx bx-star',
        },
      ],
      ratingCount: '10',
    },
    {
      mainImg: [
        {
          img: 'assets/img/listings/list_b.jpg',
        },
      ],
      categoryLink: 'single-listings',
      category: 'Shopping',
      bookmarkLink: 'single-listings',
      location: 'Bangkok, Thailand',
      title: 'Central Shopping Center',
      price: 'Start From: $110',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user3.jpg',
      openORclose: 'Close Now',
      extraClass: 'status-close',
      authorName: 'James',
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
          icon: 'bx bxs-star-half',
        },
      ],
      ratingCount: '35',
    },
    {
      mainImg: [
        {
          img: 'assets/img/listings/list_c.jpg',
        },
        {
          img: 'assets/img/listings/list_b.jpg',
        },
      ],
      categoryLink: 'single-listings',
      category: 'Beauty',
      bookmarkLink: 'single-listings',
      location: 'Suwanee, USA',
      title: 'Vesax Beauty Center',
      price: 'Start From: $100',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user4.jpg',
      openORclose: 'Open Now',
      extraClass: 'status-open',
      authorName: 'Andy',
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
          icon: 'bx bx-star',
        },
        {
          icon: 'bx bx-star',
        },
      ],
      ratingCount: '15',
    },
  ];

  customOptions: OwlOptions = {
    loop: false,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
      "<i class='flaticon-left-chevron'></i>",
      "<i class='flaticon-right-chevron'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };
  customOptions2: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    items: 1,
    navText: [
      "<i class='flaticon-left-chevron'></i>",
      "<i class='flaticon-right-chevron'></i>",
    ],
  };

  getallhappystories() {
    this.adminService.getallhappystory().subscribe(
      (response: any) => {
        console.log(response);
        this.allstory = response.data;
        console.log(this.mainImg);
        console.log(response.data[0].img1);
        let arry = [];
        arry.push(response.data[0].img1);
        arry.push(response.data[0].img2);
        arry.push(response.data[0].img3);
        console.log(arry);
        this.mainImg = arry;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
