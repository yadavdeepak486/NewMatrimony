import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { UserService } from 'src/app/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  togglecheckreligous: boolean= true;
  togglecheckfamily: boolean= true;
  togglecheckpartner: boolean= true;
  togglecheckphysical: boolean= true;
  dumPhoto = 'assets/img/me.jpg';
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';

  editbasicinformation = new FormGroup({
    gender: new FormControl(''),
    age: new FormControl(''),
    dateofbirth: new FormControl(''),
    placeofbirth: new FormControl(''),
    maritalstatus: new FormControl(''),
    childrenstatus: new FormControl(''),
    timeofbirth: new FormControl(''),

  });

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
    if(this.mydetail !== undefined)

    this.editbasicinformation.setValue({
      // name: this.mydetail.name,
      gender: this.mydetail.Gender,
      age: this.mydetail.Age,
      dateofbirth: this.mydetail.DOB,
      placeofbirth: this.mydetail.POB ,
      maritalstatus: this.mydetail._id,
      childrenstatus: this.mydetail._id,
      timeofbirth: this.mydetail.TOB
    })
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
  socioreligous(){
    console.log("button clicked")
    if (this.togglecheckreligous == false){
      this.togglecheckreligous= true
    }
    else{
      this.togglecheckreligous= false
    }
  }
  
  familydetail(){
    console.log("button clicked")
    if (this.togglecheckfamily == false){
      this.togglecheckfamily= true
    }
    else{
      this.togglecheckfamily= false
    }
  }
  partnerexp(){
    console.log("button clicked")
    if (this.togglecheckpartner == false){
      this.togglecheckpartner= true
    }
    else{
      this.togglecheckpartner= false
    }
  }
  physicaldetail(){
    console.log("button clicked")
    if (this.togglecheckphysical == false){
      this.togglecheckphysical= true
    }
    else{
      this.togglecheckphysical= false
    }
  }
}
