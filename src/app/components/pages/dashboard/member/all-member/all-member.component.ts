import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-all-member',
  templateUrl: './all-member.component.html',
  styleUrls: ['./all-member.component.scss'],
})
export class AllMemberComponent implements OnInit {
  alluser: any;
  plans:any;
  allmaritalstatus:any;
  allcity:any;
  allreligion:any;
  allcaste:any;
  alleducation:any;
  allemployedin:any;
  genderList: string[] = ['Male', 'Female'];
  minageList: string[] = ['18 years', '19  years','20 years','21 years','22 years','23 years', '24 years', '25 years'];
  maxageList: string[] = ['26 years', '27  years','28 years','29 years','30 years'];
  manglikList: string[] = ['Not Manglik', 'Manglik','Ardh Manglik'];

  constructor(public adminServie: AdminService) {}

  ngOnInit(): void {
    this.resetOption = [this.options[0]];
    this.getallusers();
    this.getmaritalstatus();
    this.getallcity();
    this.getallreligion();
    this.getallcaste();
    this.getalleducation();
    this.getallemployedin();
    this.allplans();
  
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
      name: 'name',
    },
    {
      name: 'lorem',
    },
    {
      name: 'lorem',
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
  ];
  // Distance Select
  options3 = [
    {
      name: 'Driving (5 mi.)',
    },
    {
      name: 'Walking (1 mi.)',
    },
    {
      name: 'Biking (2 mi.)',
    },
    {
      name: 'Within 4 blocks',
    },
    {
      name: 'Bicycle (6 mi.)',
    },
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
    },
  ];

  verticalListings: number = 1;

  breadcrumb = [
    {
      title: 'Verify member List',
      subTitle: 'Members',
    },
  ];

  getallusers() {
    this.adminServie.getalluser().subscribe(
      (response: any) => {
        console.log(response);
        this.alluser = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // advance search
  getmaritalstatus() {
    this.adminServie.getallmaritalstatus().subscribe(
      (response: any) => {
        // console.log(response);
        this.allmaritalstatus = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallcity() {
    this.adminServie.allcity().subscribe(
      (response: any) => {
        console.log(response);
        this.allcity = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallreligion() {
    this.adminServie.getallreligion().subscribe(
      (response: any) => {
        // console.log(response)
        this.allreligion = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getallcaste() {
    this.adminServie.getallcaste().subscribe(
      (response: any) => {
        this.allcaste = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getalleducation() {
    this.adminServie.alleducation().subscribe(
      (response: any) => {
        console.log(response);
        this.alleducation = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getallemployedin() {
    this.adminServie.allemployedin().subscribe(
      (response: any) => {
        console.log(response);
        this.allemployedin = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  allplans() {
    this.adminServie.allplans().subscribe(
      (response: any) => {
        console.log(response);
        this.plans = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // close
}
