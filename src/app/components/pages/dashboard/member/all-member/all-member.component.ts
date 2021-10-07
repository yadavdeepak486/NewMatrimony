import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-all-member',
  templateUrl: './all-member.component.html',
  styleUrls: ['./all-member.component.scss'],
})
export class AllMemberComponent implements OnInit {
  alluser: any;
  ngStyle: boolean = false;
  loader:boolean= true;
  plans: any;
  allmaritalstatus: any;
  allcity: any;
  allreligion: any;
  allcaste: any;
  alleducation: any;
  allemployedin: any;
  allrmanagers:any
  genderList: string[] = ['Male', 'Female'];
  manglikList: string[] = ['Not Manglik', 'Manglik', 'Ardh Manglik'];
  searchinput = new FormGroup({
    oneinput: new FormControl(''),
  });

  advancesearchform = new FormGroup({
    gender: new FormControl(''),
    Maritalstatus: new FormControl(''),
    minage: new FormControl(''),
    maxage: new FormControl(''),
    City: new FormControl(''),
    rmanager: new FormControl(''),
    Religion: new FormControl(''),
    Caste: new FormControl(''),
    memtype: new FormControl(''),
    Status: new FormControl(''),
    Education: new FormControl(''),
    Employedin: new FormControl(''),
    spe_cases: new FormControl(''),
    Manglik: new FormControl(''),
  });

  constructor(public adminServie: AdminService) {}

  ngOnInit(): void {
    this.getallusers();
    this.getmaritalstatus();
    this.getallcity();
    this.getallreligion();
    this.getallcaste();
    this.getalleducation();
    this.getallemployedin();
    this.allplans();
    this.getallrmangers();
  }


  // Category Select
  singleSelect: any = [];
  multiSelect: any = [];
  stringArray: any = [];
  objectsArray: any = [];
  config = {
    displayKey: 'name',
    search: true,
  };

  searchChange($event) {
    console.log($event);
  }

  verticalListings: number = 1;

  breadcrumb = [
    {
      title: 'Verify member List',
      subTitle: 'Members',
    },
  ];

  getallusers() {
    this.adminServie.getalluserforadmin().subscribe(
      (response: any) => {
        console.log(response);
        this.alluser = response.data;
        this.loader= false;
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



  regsearch() {
    this.loader= true;
    console.log(this.searchinput.value);
    this.adminServie.regsearch(this.searchinput.value).subscribe(
      (response: any) => {
        console.log(response);
        this.alluser = response.data;
        this.loader= false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  advancesearch(){
    this.loader= true;
    console.log(this.advancesearchform.value)
    this.adminServie.advancefilter(this.advancesearchform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.alluser = response.data;
        this.loader= false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallrmangers(){
    this.adminServie.getallstaff().subscribe(
      (response: any) => {
        console.log(response);
        this.allrmanagers = response.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  resetsearch() {
    this.advancesearchform.reset();
  }

}
