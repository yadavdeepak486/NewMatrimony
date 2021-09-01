import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-reported-member',
  templateUrl: './reported-member.component.html',
  styleUrls: ['./reported-member.component.scss']
})
export class ReportedMemberComponent implements OnInit {

  allreportedusers: any;
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
    this.getreportedusers();
    this.getmaritalstatus();
    this.getallcity();
    this.getallreligion();
    this.getallcaste();
    this.getalleducation();
    this.getallemployedin();
    this.allplans();
  }

  singleSelect: any = [];
  source: any;
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
  settings = {
    // add: {
    //   addButtonContent: '<i  class="ion-ios-plus-outline"></i>',
    //   createButtonContent: '<i class="ion-checkmark" ></i>',
    //   cancelButtonContent: '<i class="ion-close"></i>',
    //   confirmCreate: true
    // },
    // edit: {
    //   editButtonContent: '<i class="ion-edit"></i>',
    //   saveButtonContent: '<i class="ion-checkmark"></i>',
    //   cancelButtonContent: '<i class="ion-close"></i>',
    //   confirmSave: true
    // },
    // delete: {
    //   deleteButtonContent: '<i class="ion-trash-a"></i>',
    //   confirmDelete: true
    // },
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [
        // { name: 'Permissions', title:  '&nbsp;&nbsp;<i class="bntn btn-danger"><button>Reject</button></i>'},
      ],
      position: 'right',
    },

    columns: {
      Profile: {
        title: 'Image',
        filter: false,
        type: 'html',
        valuePrepareFunction: (imageUrl) => {
          return (
            '<img src="' +
            imageUrl +
            '" alt="Smiley face" height="60" width="60" />'
          );
        },
      },
      MatriID: {
        title: '#',
        filter: true,
      },
      Name: {
        title: 'Name',
        filter: true,
      },
      createdAt: {
        title: 'Member Since',
        filter: true,
      },
      Status: {
        title: 'Member Status	',
        filter: true,
      },

      // Permissions: {
      //   title: 'Action',
      //   filter: true,
      //   actions: true,
      // },
    },
    attr: {
      class: 'table table-bordered',
    },
  };

  verticalListings: number = 1;
  onSearch(query: string = '') {
    this.source.setFilter(
      [
        // fields we want to inclue in the search
        {
          field: '#',
          search: query,
        },
        {
          field: 'image',
          search: query,
        },
        {
          field: 'memberid',
          search: query,
        },
        {
          field: 'Name',
          search: query,
        },
        {
          field: 'profilereported',
          search: query,
        },
        {
          field: 'memberscience',
          search: query,
        },
        {
          field: 'memberstatus',
          search: query,
        },
        {
          field: 'action',
          search: query,
        },
      ],
      false
    );
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  breadcrumb = [
    {
      title: 'Reported Member List',
      subTitle: 'Members',
    },
  ];

  getreportedusers() {
    this.adminServie.getreportedusers().subscribe(
      (response: any) => {
        console.log(response);
        this.allreportedusers = response.data;
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

