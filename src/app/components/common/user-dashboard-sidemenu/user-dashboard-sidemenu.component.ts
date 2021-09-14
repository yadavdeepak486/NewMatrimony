import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-dashboard-sidemenu',
  templateUrl: './user-dashboard-sidemenu.component.html',
  styleUrls: ['./user-dashboard-sidemenu.component.scss'],
})
export class UserDashboardSidemenuComponent implements OnInit {
  checkauth: any;
  logo: any;
  sendinterest: any;
  receivedinterest: any;
  sortlist: any;
  whoview: any;
  photoreqsent: any;
  photoreqrec: any;
  blockeduser: any;
  stndpath = 'assets/img/logo.png';
  filepath: any;
  constructor(public userService: UserService, public routes: Router) {
    this.checkauth = localStorage.getItem('auth');
    console.log(this.checkauth);
  }

  ngOnInit(): void {
    this.getlogo();
    this.getreceivedbadge();
    this.getsendbadge();
    this.getsortlistbadge();
    this.whoviewedmyprofile();
    this.mysentphotoreq();
    this.myrecphotoreq();
    this.myblockedusers();
  }

  getlogo() {
    this.userService.getlogo().subscribe(
      (response: any) => {
        this.logo = response.data;
        console.log(this.logo);
        console.log(this.logo.logo);
        this.filepath = this.logo.logo;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getreceivedbadge() {
    this.userService.receivedinterest().subscribe(
      (response: any) => {
        console.log(response);
        this.receivedinterest = response.data?.length;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getsendbadge() {
    this.userService.sentinterest().subscribe(
      (response: any) => {
        console.log(response);
        this.sendinterest = response.data.length;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getsortlistbadge() {
    this.userService.myshortlist().subscribe(
      (response: any) => {
        console.log(response);
        this.sortlist = response.data.length;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  whoviewedmyprofile() {
    this.userService.showmyprofileviewedby().subscribe(
      (response: any) => {
        console.log(response);
        this.whoview = response.data.length;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mysentphotoreq() {
    this.userService.mysentphotoreq().subscribe(
      (response: any) => {
        console.log(response);
        this.photoreqsent = response.data.length;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  myrecphotoreq() {
    this.userService.myreceivedphotoreq().subscribe(
      (response: any) => {
        console.log(response);
        this.photoreqrec = response.data.length;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  myblockedusers() {
    this.userService.allblockedusersbyme().subscribe(
      (response: any) => {
        console.log(response);
        this.blockeduser = response.data.length;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
