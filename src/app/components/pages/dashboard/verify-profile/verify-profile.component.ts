import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

import PhotoViewer from 'photoviewer';
@Component({
  selector: 'app-verify-profile',
  templateUrl: './verify-profile.component.html',
  styleUrls: ['./verify-profile.component.scss']
})
export class VerifyProfileComponent implements OnInit {
  id: any;
  userdetails: any;
  dumPhoto = 'assets/img/me.jpg';
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';


    constructor(public userService: UserService, public adminService: AdminService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.gethisdetails()

  }


  breadcrumb = [
      {
          title: 'Verify Profile',
          subTitle: 'Dashboard'
      }
  ]


  photopreview(imgurl){

    var item = [{
          src: imgurl,
          title: 'Photo View'
      }]

  // define options (if needed)
  var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // this option means you will start at first image
  };

  // Initialize the plugin
  var viewer = new PhotoViewer(item, options);

  }

  gethisdetails() {
    this.userService.viewprofileadmin(this.id)?.subscribe(
      (response: any) => {
        console.log(response);
        this.userdetails = response.data;
        console.log(response.data.Gender);
        if (response.data.Gender == 'Female') {
          this.dumPhoto = this.Photodumwomen;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ApprovePhoto1() {
      const data = {
        Photo1Approve: "Yes"}
     this.adminService.edituserprofile(this.id, data).subscribe(
      (response: any) => {
        console.log(response);
        this.gethisdetails()

      },
      (error) => {
        console.log(error);
      }
    );
  }

  ApprovePhoto2() {
    const data = {
      Photo2Approve: "Yes"}
   this.adminService.edituserprofile(this.id, data).subscribe(
    (response: any) => {
      console.log(response);
      this.gethisdetails()
    },
    (error) => {
      console.log(error);
    }
  );
}

ApprovePhoto3() {
  const data = {
    Photo3Approve: "Yes"}
 this.adminService.edituserprofile(this.id, data).subscribe(
  (response: any) => {
    console.log(response);
    this.gethisdetails()
  },
  (error) => {
    console.log(error);
  }
);
}

ApprovePartnerExpectationsApprove() {
  const data = {
    PartnerExpectationsApprove: "Yes"}
 this.adminService.edituserprofile(this.id, data).subscribe(
  (response: any) => {
    console.log(response);
    this.gethisdetails()
  },
  (error) => {
    console.log(error);
  }
);
}
}
