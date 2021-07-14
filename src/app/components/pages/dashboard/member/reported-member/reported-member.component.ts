import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-reported-member',
  templateUrl: './reported-member.component.html',
  styleUrls: ['./reported-member.component.scss']
})
export class ReportedMemberComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.getreportedusers();
  }


  source: any;

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

    // columns: {
    //   id: {
    //     title: '#',
    //     filter: false,

    //   },
    //   membername: {
    //     title: 'Member Name',
    //     filter: false,

    //   },
    //   reportedby: {
    //     title: 'Reported By',
    //     filter: false,
    //   },
    //   reportreason: {
    //     title: 'Report Reason',
    //     filter: false,
    //   },

    //   action: {
    //     title: 'Action',
    //     filter: false,
    //   },

    //   // Permissions: {
    //   //   title: 'Action',
    //   //   filter: false,
    //   //   actions: true,
    //   // },
    // },
    columns: {
      Profile: {
        title: 'Image',
        filter: false,
        type: 'html',
        valuePrepareFunction: (imageUrl) => { return '<img src="' + imageUrl + '" alt="Smiley face" height="60" width="60" />' },
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
        field: 'membername',
        search: query,
      },
      {
        field: 'reportedby',
        search: query,
      },
      {
        field: 'reportreason',
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
      title: 'Reported Members',
      subTitle: 'Members'
    }
  ]

  getreportedusers() {
    this.adminService.getreportedusers().subscribe((response: any) => {
      console.log(response)
      this.source = response.data
    }, (error) => {
      console.log(error)
    })
  }


}

