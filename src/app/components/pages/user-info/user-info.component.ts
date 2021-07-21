import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnChanges {
  allreligion: any;
  allheights: any;
  allcity: any;
  alleducation: any;
  allemployedin: any;
  alloccupation: any;
  allcountry: any;
  allstate: any;
  selectedreligion: any;

  userinfo = new FormGroup({
    Religion: new FormControl('', Validators.required),
    Caste: new FormControl('', Validators.required),
    Manglik: new FormControl('', Validators.required),
    Height: new FormControl('', Validators.required),
    POB: new FormControl('', Validators.required),
    TOB: new FormControl('', Validators.required),
    Education: new FormControl('', Validators.required),
    Employedin: new FormControl('', Validators.required),
    Occupation: new FormControl('', Validators.required),
    LCountry: new FormControl('', Validators.required),
    LState: new FormControl('', Validators.required),
    LCity: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
  });

  allcaste: any;
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallreligion();
    this.getallheights();
    this.getallcity();
    this.alleducations();
    this.allemployedins();
    this.alloccupations();
    this.alleducations();
    this.allcountrys();
    this.allstates();
  }

  ngOnChanges(): void {
    console.log(this.selectedreligion.value);
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

  getallheights() {
    this.adminService.getallheight().subscribe(
      (response: any) => {
        this.allheights = response.data;
        console.log(response);
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
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  alleducations() {
    this.adminService.alleducation().subscribe(
      (response: any) => {
        this.alleducation = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  allemployedins() {
    this.adminService.allemployedin().subscribe(
      (response: any) => {
        this.allemployedin = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  alloccupations() {
    this.adminService.alloccupation().subscribe(
      (response: any) => {
        this.alloccupation = response.data;
        console.log(response);
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
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  allstates() {
    this.adminService.allstate().subscribe(
      (response: any) => {
        this.allstate = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  castofrelgion(id) {
    console.log(id);
    this.adminService.castesofreligion(id).subscribe(
      (response: any) => {
        this.allcaste = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onChange(id) {
    console.log(id);
  }

  submitandmovephoto() {
    console.log(this.userinfo.value);
  }
}
