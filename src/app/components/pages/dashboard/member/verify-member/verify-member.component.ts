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
    
    this.getinactiveuser();
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
      add: true,
      edit: true,
      delete: true,
    
      custom: [
        // { name: 'Permissions', title:  '&nbsp;&nbsp;<i class="bntn btn-danger"><button>Reject</button></i>'},
      ],
      position: 'right',

    },

    columns: {
      Photo1: {
        title: 'Image',
        filter: false,
        type: 'html',
        valuePrepareFunction: (imageUrl) => { return '<img src="' + imageUrl + '" alt="Smiley face" height="60" width="60" />' },
      },
     
      firstName: {
        title: 'First Name/Last Name',
        filter: true,
      },
      Gender: {
        title: 'Gender',
        filter: true,
      },
      description: {
        title: 'Description',
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
        field: 'firstName',
        search: query,
      },
      {
        field: 'Gender',
        search: query,
      },
      {
        field: '',
        search: query,
      },
    ], true);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  breadcrumb = [
    {
      title: 'Verify member List',
      subTitle: 'Members'
    }
  ]

  getinactiveuser() {
    this.adminServie.getinactiveuser().subscribe((response: any) => {
      console.log(response)
      this.source = response.data
    }, (error) => {
      console.log(error)
    })
  }

  

}
