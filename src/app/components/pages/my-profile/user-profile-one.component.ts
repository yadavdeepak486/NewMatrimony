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
  togglecheckproperties: boolean= true;
  togglecheckhoroscope: boolean= true;
  dumPhoto = 'assets/img/me.jpg';
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';

  educationslt = new FormControl();
  educationsltList: string[] = ['10th', '12th', 'Polytechnic Diploma', 'Graduation', 'Post Graduation', ];
  religionslt = new FormControl();
  religionsltList: string[] = ['Hindu', 'Christian', 'Jain', ];
  castslt = new FormControl();
  castsltList: string[] = ['Jain', 'Christian', 'Balmiki','Bhanjra', ];

  editbasicinformation = new FormGroup({
    gender: new FormControl(''),
    age: new FormControl(''),
    dateofbirth: new FormControl(''),
    maritalstatus: new FormControl(''),
    mothertounge: new FormControl(''),
    religion: new FormControl(''),
    caste: new FormControl(''),
    castepaternal: new FormControl(''),
    castematernal: new FormControl(''),
    childrenitany: new FormControl(''),
    childrenstatus: new FormControl(''),
   
  });

  editfamilydetail = new FormGroup({
    familytype: new FormControl(''),
    familyvalues: new FormControl(''),
    familystatus: new FormControl(''),
    fatheroccupation: new FormControl(''),
    motheroccupation: new FormControl(''),
    nofelderbrothers: new FormControl(''),
    nofyoungerbrothers: new FormControl(''),
    nofeldersister: new FormControl(''),
    nofyoungersister: new FormControl(''),
    nofmarriedbrother: new FormControl(''),
    nofmarriedsister: new FormControl(''),

  });

  editphysicalstatus = new FormControl({
    height: new FormControl(''),
    bloodgroup: new FormControl (''),
    bodytype: new FormControl (''),
    smokehabit: new FormControl(''),
    specialcase: new FormControl (''),

  })

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
      maritalstatus: this.mydetail._id,
      mothertounge: this.mydetail.PE_MotherTongue,
      religion: this.mydetail.Religion,
      caste: this.mydetail.Caste,
      castepaternal: this.mydetail.PSubcaste,
      castematernal: this.mydetail.MSubcaste,
      childrenitany: this.mydetail._id,
      childrenstatus: this.mydetail._id
      
    })

    this.editfamilydetail.setValue({
      familytype: this.mydetail.FamilyType,
      familyvalues: this.mydetail.FamilyOrigin,
      familystatus: this.mydetail.FamilyStatus,
      fatheroccupation: this.mydetail.Fathersoccupation,
      motheroccupation: this.mydetail.Mothersoccupation,
      nofelderbrothers: this.mydetail.noofbrothers,
      nofyoungerbrothers: this.mydetail.noyubrothers,
      nofeldersister: this.mydetail.noofsisters,
      nofyoungersister: this.mydetail.noyusisters,
      nofmarriedbrother: this.mydetail.nbm,
      nofmarriedsister: this.mydetail.nsm
        
    })

    this.editphysicalstatus.setValue({
      height: this.mydetail.Height,
      bloodgroup: this.mydetail.BloodGroup,
      bodytype:  this.mydetail.Bodytype,
      smokehabit: this.mydetail.Smoke,
      specialcase: this.mydetail.Spe_cases
      
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
  properties(){
    console.log("button clicked")
    if (this.togglecheckproperties == false){
      this.togglecheckproperties= true
    }
    else{
      this.togglecheckproperties= false
    }
  }
  horoscope(){
    console.log("button clicked")
    if (this.togglecheckhoroscope == false){
      this.togglecheckhoroscope= true
    }
    else{
      this.togglecheckhoroscope= false
    }
  }
}
