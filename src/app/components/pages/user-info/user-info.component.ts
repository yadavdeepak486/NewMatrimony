import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  allreligion: any;
  allcaste: any;
  allheights: any;
  alleducation: any;
  allemployedin: any;
  alloccupation: any;
  allcountry: any;
  lallstate: any;
  lallcity: any;
  allstate: any;
  allcity: any;
  alllanguage: any;
  allhometown: any;
  selectedreligion: any;
  disablecastetab: any = true;

  userinfo = new FormGroup({
    Religion: new FormControl('', Validators.required),
    Caste: new FormControl('', Validators.required),
    Manglik: new FormControl('No', Validators.required),
    Height: new FormControl('610ba756fbbfb6449ca84dd1', Validators.required),
    POB: new FormControl('', Validators.required),
    TOB: new FormControl('', Validators.required),
    Education: new FormControl('614455575241e81a44a14161', Validators.required),
    Employedin: new FormControl('61446dff93a9d20c30ceb7d9', Validators.required),
    Language: new FormControl('6144772751d4e941487a2504', Validators.required),
    Occupation: new FormControl('61445ed00ceafb302c15672e', Validators.required),
    LCountry: new FormControl('', Validators.required),
    LState: new FormControl('', Validators.required),
    LCity: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    //HomeTown: new FormControl('', Validators.required),
  });

  constructor(
    public adminService: AdminService,
    public userService: UserService,
    private toastr: ToastrService,
    public routes: Router
  ) {}

  ngOnInit(): void {
    this.getallreligion();
    this.getallheights();
    this.alleducations();
    this.allemployedins();
    this.alloccupations();
    this.alleducations();
    this.allcountrys();
    this.getalllanguage();
    this.getallhometown();
  }

  // ngOnChanges(): void {
  //   console.log(this.selectedreligion.value);
  // }

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

  getallhometown() {
    this.adminService.allhometown().subscribe(
      (response: any) => {
        console.log(response);
        this.allhometown = response.data;
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
        // console.log(response);
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
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getalllanguage() {
    this.adminService.getalllanguage().subscribe(
      (response: any) => {
        this.alllanguage = response.data;
        //console.log(response);
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
        //console.log(response);
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
        //console.log(response);
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
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  lstateofcountry(id) {
    console.log(id);
    if (id !== null) {
      this.adminService.statebycountry(id).subscribe(
        (response: any) => {
          this.lallstate = response.data;
          //console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  lcityofstate(id) {
    console.log(id);
    if (id !== null) {
      this.adminService.citybystate(id).subscribe(
        (response: any) => {
          this.lallcity = response.data;
          //console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  preventnumber(e){
    // console.log(e);
    var keycode = e.keyCode;
    var valid =
        //(keycode > 47 && keycode < 58)   || // number keys
        keycode == 32 || keycode == 13 || keycode == 8 || keycode == 9  || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 64 && keycode < 91) // letter keys
        //(keycode > 95 && keycode < 112)  || // numpad keys
        //(keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        //(keycode > 218 && keycode < 223);   // [\]' (in order)

    return valid;
  }

  stateofcountry(id) {
    console.log(id);
    if (id !== null) {
      this.adminService.statebycountry(id).subscribe(
        (response: any) => {
          this.allstate = response.data;
          //console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  cityofstate(id) {
    console.log(id);
    if (id !== null) {
      this.adminService.citybystate(id).subscribe(
        (response: any) => {
          this.allcity = response.data;
          //console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  castofrelgion(id) {
    console.log(id);
    if (id !== null) {
      this.adminService.castesofreligion(id).subscribe(
        (response: any) => {
          this.allcaste = response.data;
          //console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  submitandmovephoto() {
    console.log(this.userinfo.value);
    this.userService.addotheruserdetails(this.userinfo.value).subscribe(
      (response: any) => {
        this.toastr.success('Information added successfully');
        this.routes.navigate(['/photo-file']);
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
