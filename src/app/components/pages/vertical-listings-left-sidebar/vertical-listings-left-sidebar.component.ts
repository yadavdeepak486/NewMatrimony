import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-vertical-listings-left-sidebar',
  templateUrl: './vertical-listings-left-sidebar.component.html',
  styleUrls: ['./vertical-listings-left-sidebar.component.scss'],
})
export class VerticalListingsLeftSidebarComponent implements OnInit {
  users: any;
  ngStyle: boolean = false;

  falseValue = 'false';
  trueValue = 'true';

  allmaritalstatus: any;
  allreligion: any;
  allcountry: any;
  allstate: any;
  allcity: any;
  allcaste: any;
  allheights: any;
  alllanguage: any;
  minheights: any;

  filteruserform = new FormGroup({
    minage: new FormControl(''),
    maxage: new FormControl(''),
    MatriID: new FormControl(''),
    Maritalstatus: new FormControl(''),
    Religion: new FormControl(''),
    Caste: new FormControl(''),
    Language: new FormControl(''),
    Country: new FormControl(''),
    State: new FormControl(''),
    City: new FormControl(''),
    minheight: new FormControl(''),
    maxheight: new FormControl(''),
    memtype: new FormControl(''),
  });

  reliform = new FormGroup({
    religion: new FormControl(''),
  });

  contform = new FormGroup({
    country: new FormControl(''),
  });

  stateform = new FormGroup({
    state: new FormControl(''),
  });

  constructor(
    public userService: UserService,
    public adminService: AdminService,
    private router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallUsers();
    this.getmaritalstatus();
    this.getallreligion();
    this.getallcaste();
    this.allcountrys();
    this.getallstate();
    this.getallcity();
    this.getallheights();
    this.getalllanguage();
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

  searchChange($event) {
    console.log($event);
  }
  reset() {
    this.resetOption = [];
  }

  resetsearch() {
    this.filteruserform.reset();
  }

  getmaritalstatus() {
    this.adminService.getallmaritalstatus().subscribe(
      (response: any) => {
        // console.log(response);
        this.allmaritalstatus = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallreligion() {
    this.adminService.getallreligion().subscribe(
      (response: any) => {
        this.allreligion = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  allcountrys() {
    this.adminService.allcountry().subscribe(
      (response: any) => {
        this.allcountry = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallstate() {
    this.adminService.allstate().subscribe(
      (response: any) => {
        this.allstate = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallcity() {
    this.adminService.allcity().subscribe(
      (response: any) => {
        this.allcity = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallcaste() {
    console.log();
    this.adminService.getallcaste().subscribe(
      (response: any) => {
        this.allcaste = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  casteofselect(e) {
    console.log(e);
    this.reliform.setValue({
      religion: e,
    });
    this.adminService.multiplecaste(this.reliform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.allcaste = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  stateofselect(e) {
    console.log(e);
    this.contform.setValue({
      country: e,
    });
    this.adminService.allstateofcountry(this.contform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.allstate = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cityofselect(e) {
    console.log(e);
    this.contform.setValue({
      country: e,
    });
    this.adminService.allstateofcountry(this.contform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.allstate = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallheights() {
    this.adminService.getallheight().subscribe(
      (response: any) => {
        this.allheights = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  slicingdata(e) {
    const idx = this.allheights.findIndex((val) => val.cmvalue === e);
    console.log(e);
    console.log(idx);
    this.minheights = this.allheights;
    this.minheights.splice(0, idx);
    console.log(this.minheights);
  }

  getalllanguage() {
    this.adminService.getalllanguage().subscribe(
      (response: any) => {
        this.alllanguage = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallUsers() {
    this.userService.getallprofiles().subscribe(
      (response: any) => {
        console.log(response);
        this.users = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  userDetails(id: number) {
    this.router.navigate(['profile-detail', id]);
  }

  sendinterest(id) {
    console.log(id);
    this.userService.sendinterest(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Interest sent successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addtoshortlist(id) {
    console.log(id);
    this.userService.addtoshortlist(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Added to sortlist');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendphotoreq(id) {
    this.userService.sendphotoreq(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Photo request sent');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  startchat(id) {
    this.userService.createchatroom(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Chat room');
        this.router.navigate(['user-dashboard/user-chat']);
      },
      (error) => {
        console.log(error);
        if (error.error.msg == 'Already Exists') {
          this.router.navigate(['user-dashboard/user-chat']);
        }
      }
    );
  }

  filter() {
    console.log(this.filteruserform.value);
    this.userService.getfiltereduser(this.filteruserform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.users = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }
}
