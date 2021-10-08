import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.scss'],
})
export class ProfileTabsComponent implements OnInit {
  userdetails: any;
  id: any;
  mydetail: any;


  animal: string;
  name: string;

  constructor(
    public userService: UserService,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewDetailedProfile(this.id);
    this.getmydetails();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { view_contact_total: this.mydetail.view_contact_total?this.mydetail.view_contact_total:"", view_contact_bal: this.mydetail.view_contact_bal?this.mydetail.view_contact_bal:"",id: this.mydetail._id,userid:this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });


  }

  viewDetailedProfile(id) {
    this.userService.viewoneprofile(id).subscribe(
      (response: any) => {
        console.log(response);
        this.userdetails = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getmydetails() {
    this.userService.getmyprofiledetail().subscribe(
      (response: any) => {
        console.log(response);
        this.mydetail = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./profile-tabs.component.scss'],
})
export class DialogOverviewExampleDialog {

  view_contact_bal:any
  view_contact_total:any
  id:any
  userid:any
  constructor(
    public newdialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public newdialog: MatDialog,
    public userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data)
    if(data){
      this.view_contact_bal = data?.view_contact_bal
      this.view_contact_total = data?.view_contact_total
      this.id = data?.id
      this.userid = data?.userid
    }
  }

  onNoClick(): void {
    this.newdialogRef.close();
  }

  opennewDialog(): void {
    const newdialogRef = this.newdialog.open(DialogViewContactDetails, {
      width: '1000px',data:{
        id: this.id,
        userid: this.userid,
      }
    });



    newdialogRef.afterClosed().subscribe((result) => {
      this.newdialogRef.close();
    });
  }
}

@Component({
  selector: 'dialog-view-contact-details',
  templateUrl: './dialog-view-contact-details.html',
  styleUrls: ['./profile-tabs.component.scss'],
})
export class DialogViewContactDetails implements OnInit{
  userdetails: any;
  id: any;
  userid: any;
  secretdetail: any;
  combinedaddress = {
    address: ''
  }

  constructor(
    public newdialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public userService: UserService,
    public route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data){
      this.id = data.id,
      this.userid = data.userid
    }
  }

  ngOnInit(): void{
    this.viewDetailedProfile(this.userid);
  }

  viewDetailedProfile(id) {
    console.log(id)
    this.userService.viewoneprofile(id).subscribe(
      (response: any) => {
        console.log(response);
        this.secretdetail = response.data;
        this.saveadress();

      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveadress(){
    this.combinedaddress.address = `${this.secretdetail?.Name ? this.secretdetail?.Name:''}${this.secretdetail?.firstName?this.secretdetail?.firstName:''} ${this.secretdetail?.LastName?this.secretdetail?.LastName:''}, ${this.secretdetail?.ConfirmEmail?this.secretdetail?.ConfirmEmail:''}, ${this.secretdetail?.Mobile?this.secretdetail?.Mobile:''}, ${this.secretdetail?.Phone?this.secretdetail?.Phone:''}`
    this.userService.addviewedaddress(this.combinedaddress,this.userid).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.combinedaddress)
  }

  onNoClick(): void {
    this.newdialogRef.close();
  }
}
