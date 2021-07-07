import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-free-member',
  templateUrl: './free-member.component.html',
  styleUrls: ['./free-member.component.scss']
})
export class FreeMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


source: LocalDataSource;

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
      add: false,
      edit: false,
      delete: false,
      custom: [
        // { name: 'Permissions', title:  '&nbsp;&nbsp;<i class="bntn btn-danger"><button>Reject</button></i>'},
      ],
      position: 'right',

    },

    columns: {
      id: {
        title: '#',
        filter: false,

      },
      image: {
        title: 'Image',
        filter: false,

      },
      memberid: {
        title: 'Member ID',
        filter: false,
      },
      Name: {
        title: 'Name',
        filter: false,
      },
      profilereported: {
        title: 'Profile Reported',
        filter: false,
      },
      memberscience: {
        title: 'Member Since	',
        filter: false,
      },
      memberstatus: {
        title: 'Member Status	',
        filter: false,
      },
      
      action: {
        title: 'Action',
        filter: false,
      },

      // Permissions: {
      //   title: 'Action',
      //   filter: false,
      //   actions: true,
      // },
    },
    attr: {
      class: 'table table-bordered'
    },

  };

  onSearch(query: string = '') {
    this.source.setFilter([
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
     
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

breadcrumb = [
    {
        title: 'Free Member List',
        subTitle: 'Members'
    }
]

}
