import { Component, Inject, OnInit } from '@angular/core';
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
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { name: this.name, animal: this.animal },
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
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./profile-tabs.component.scss'],
})
export class DialogOverviewExampleDialog {
  constructor(
    public newdialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public newdialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.newdialogRef.close();
  }

  opennewDialog(): void {
    const newdialogRef = this.newdialog.open(DialogViewContactDetails, {
      width: '500px',
    });

    newdialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-view-contact-details',
  templateUrl: './dialog-view-contact-details.html',
  styleUrls: ['./profile-tabs.component.scss'],
})
export class DialogViewContactDetails {
  userdetails: any;
  constructor(
    public newdialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public userService: UserService,
    public route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

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

  onNoClick(): void {
    this.newdialogRef.close();
  }
}
