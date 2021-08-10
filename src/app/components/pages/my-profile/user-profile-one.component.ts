import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-profile-one',
  templateUrl: './user-profile-one.component.html',
  styleUrls: ['./user-profile-one.component.scss'],
})
export class UserProfileOneComponent implements OnInit {
  mydetail: any;
  togglecheck: boolean = true;
  togglechecktwo: boolean = true;
  togglecheckoccupation: boolean = true;
  dumPhoto = 'assets/img/me.jpg';
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getmydetails();
  }

  getmydetails() {
    this.userService.getmyprofiledetail()?.subscribe(
      (response: any) => {
        console.log(response);
        this.mydetail = response.data;
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

  formone(){
    console.log("button clicked")
    if(this.togglecheck == false){
      this.togglecheck = true
    }
    else {
    this.togglecheck = false
    }
  }

  formtwo(){
    console.log("button clicked")
    if(this.togglechecktwo == false){
      this.togglechecktwo = true
    }
    else {
    this.togglechecktwo = false
    }
  }

  formoccupation(){
    console.log("button clicked")
    if(this.togglecheckoccupation == false){
      this.togglecheckoccupation = true
    }
    else {
    this.togglecheckoccupation = false
    }
  }
}
