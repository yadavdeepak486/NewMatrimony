import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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
  togglecheckreligous: boolean = true;
  togglecheckfamily: boolean = true;
  togglecheckpartner: boolean = true;
  togglecheckphysical: boolean = true;
  togglecheckproperties: boolean = true;
  togglecheckhoroscope: boolean = true;
  dumPhoto = 'assets/img/me.jpg';
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';
  //drop downs
  allprofilefor: any;
  allmaritalstatus: any;
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
  allfamilyvalues: any;
  allfamilystatus: any;
  educationslt = new FormControl();
  imageupload1: FormGroup;
  imageupload2: FormGroup;
  imageupload3: FormGroup;

  tosendpath: any;

  filePath1: any;
  filePath2: any;
  filePath3: any;

  readyupload1 = false;
  readyupload2 = false;
  readyupload3 = false;

  educationsltList: string[] = [
    '10th',
    '12th',
    'Polytechnic Diploma',
    'Graduation',
    'Post Graduation',
  ];
  religionslt = new FormControl();
  religionsltList: string[] = ['Hindu', 'Christian', 'Jain'];
  castslt = new FormControl();
  castsltList: string[] = ['Jain', 'Christian', 'Balmiki', 'Bhanjra'];

  editbasicinformation = new FormGroup({
    firstName: new FormControl(''),
    LastName: new FormControl(''),
    Gender: new FormControl(''),
    DOB: new FormControl(''),
    Maritalstatus: new FormControl(''),
    Language: new FormControl(''),
    Religion: new FormControl(''),
    Caste: new FormControl(''),
    PSubcaste: new FormControl(''),
    MSubcaste: new FormControl(''),
    NoOfChild: new FormControl(''),
    childrenlivingstatus: new FormControl(''),
    TOB: new FormControl(''),
  });

  editfamilydetailform = new FormGroup({
    FamilyType: new FormControl(''),
    Familyvalues: new FormControl(''),
    FamilyStatus: new FormControl(''),
    Fathersoccupation: new FormControl(''),
    Mothersoccupation: new FormControl(''),
    FamilyOrigin: new FormControl(''),
    noofbrothers: new FormControl(''),
    noofsisters: new FormControl(''),
    noyubrothers: new FormControl(''),
    noyusisters: new FormControl(''),
    nbm: new FormControl(''),
    nsm: new FormControl(''),
  });

  constructor(
    public userService: UserService,
    public adminService: AdminService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public routes: Router
  ) {}

  ngOnInit(): void {
    this.getmydetails();
    this.getallprofilefor();
    this.getallreligion();
    this.getmaritalstatus();
    this.getallheights();
    this.alleducations();
    this.getalllanguage();
    this.allemployedins();
    this.alloccupations();
    this.allcountrys();
    this.familyvalues();
    this.familystatus();
    this.imageupload1 = this.formBuilder.group({
      Photo1: '',
    });
    this.imageupload2 = this.formBuilder.group({
      Photo2: '',
    });
    this.imageupload3 = this.formBuilder.group({
      Photo3: '',
    });
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

  imagePreview1(e) {
    const file = e.target.files[0];
    console.log(file);
    this.imageupload1.get('Photo1').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath1 = reader.result;
    };
    this.readyupload1 = true;
  }

  imagePreview2(e) {
    const file = e.target.files[0];
    console.log(file);
    this.imageupload2.get('Photo2').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath2 = reader.result;
    };
    this.readyupload2 = true;
  }

  imagePreview3(e) {
    const file = e.target.files[0];
    console.log(file);
    this.imageupload3.get('Photo3').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath3 = reader.result;
    };
    this.readyupload3 = true;
  }

  uploadimage1() {
    console.log('req to upload image');
    console.log(this.imageupload1.value);
    this.userService.upload(this.imageupload1.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Image Uploaded Successfully');
        this.getmydetails();
        this.readyupload1 = false;
        this.imageupload1.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelupload1() {
    this.imageupload1.reset();
    this.filePath1 = '';
    this.readyupload1 = false;
  }

  uploadimage2() {
    console.log('req to upload image');
    console.log(this.imageupload2.value);
    this.userService.upload(this.imageupload2.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Image Uploaded Successfully');
        this.getmydetails();
        this.readyupload2 = false;
        this.imageupload2.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelupload2() {
    this.imageupload2.reset();
    this.filePath2 = '';
    this.readyupload2 = false;
  }

  uploadimage3() {
    console.log('req to upload image');
    console.log(this.imageupload3.value);
    this.userService.upload(this.imageupload3.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Image Uploaded Successfully');
        this.getmydetails();
        this.readyupload3 = false;
        this.imageupload3.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelupload3() {
    this.imageupload3.reset();
    this.filePath3 = '';
    this.readyupload3 = false;
  }

  //all drop downs
  getallprofilefor() {
    this.userService.getprofilefordd().subscribe(
      (response: any) => {
        //  console.log(response);
        this.allprofilefor = response.data;
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

  castofrelgion(id) {
    console.log(id);
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

  familyvalues() {
    this.adminService.allfamilyvalues().subscribe(
      (response: any) => {
        this.allfamilyvalues = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  familystatus() {
    this.adminService.allfamilystatus().subscribe(
      (response: any) => {
        this.allfamilystatus = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  lstateofcountry(id) {
    console.log(id);
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

  lcityofstate(id) {
    console.log(id);
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

  stateofcountry(id) {
    console.log(id);
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

  cityofstate(id) {
    console.log(id);
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

  cancelbasicform() {
    this.togglecheck = true;
  }

  formone() {
    this.getallcaste();
    console.log('button clicked');
    if (this.togglecheck == false) {
      this.togglecheck = true;
    } else {
      this.togglecheck = false;
    }
    if (this.mydetail !== undefined) {
      this.editbasicinformation.setValue({
        firstName: this.mydetail.firstName ? this.mydetail.firstName : null,
        LastName: this.mydetail.LastName ? this.mydetail.LastName : null,
        Gender: this.mydetail.Gender ? this.mydetail.Gender : null,
        DOB: this.mydetail.DOB ? this.mydetail.DOB : null,
        Maritalstatus: this.mydetail.Maritalstatus?._id
          ? this.mydetail.Maritalstatus?._id
          : null,
        Language: this.mydetail?.Language?._id
          ? this.mydetail.Language?._id
          : null,
        Religion: this.mydetail?.Religion?._id
          ? this.mydetail.Religion?._id
          : null,
        Caste: this.mydetail.Caste?._id ? this.mydetail.Caste?._id : null,
        PSubcaste: this.mydetail.PSubcaste ? this.mydetail.PSubcaste : null,
        MSubcaste: this.mydetail.MSubcaste ? this.mydetail.MSubcaste : null,
        NoOfChild: this.mydetail.NoOfChild ? this.mydetail.NoOfChild : null,
        childrenlivingstatus: this.mydetail.childrenlivingstatus
          ? this.mydetail.childrenlivingstatus
          : null,
        TOB: this.mydetail.TOB ? this.mydetail.TOB : null,
      });
      console.log(this.editbasicinformation.value);
    }
  }

  updatedata() {
    console.log(this.editbasicinformation.value);
    this.userService
      .addotheruserdetails(this.editbasicinformation.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success('Basic Details Updated Successfully');
          this.togglecheck = true;
          this.editbasicinformation.reset();
          this.getmydetails();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  formtwo() {
    console.log('button clicked');
    if (this.togglechecktwo == false) {
      this.togglechecktwo = true;
    } else {
      this.togglechecktwo = false;
    }
  }

  formoccupation() {
    console.log('button clicked');
    if (this.togglecheckoccupation == false) {
      this.togglecheckoccupation = true;
    } else {
      this.togglecheckoccupation = false;
    }
  }
  socioreligous() {
    console.log('button clicked');
    if (this.togglecheckreligous == false) {
      this.togglecheckreligous = true;
    } else {
      this.togglecheckreligous = false;
    }
  }

  familydetail() {
    console.log('button clicked');
    if (this.togglecheckfamily == false) {
      this.togglecheckfamily = true;
    } else {
      this.togglecheckfamily = false;
    }
    if (this.mydetail !== undefined) {
      this.editfamilydetailform.setValue({
        FamilyType: this.mydetail.FamilyType ? this.mydetail.FamilyType : null,
        Familyvalues: this.mydetail.Familyvalues
          ? this.mydetail.Familyvalues
          : null,
        FamilyStatus: this.mydetail.FamilyStatus
          ? this.mydetail.FamilyStatus
          : null,
        Fathersoccupation: this.mydetail.Fathersoccupation
          ? this.mydetail.Fathersoccupation
          : null,
        Mothersoccupation: this.mydetail.Mothersoccupation?._id
          ? this.mydetail.Mothersoccupation?._id
          : null,
        FamilyOrigin: this.mydetail?.FamilyOrigin?._id
          ? this.mydetail.FamilyOrigin?._id
          : null,
        noofbrothers: this.mydetail?.noofbrothers?._id
          ? this.mydetail.noofbrothers?._id
          : null,
        noofsisters: this.mydetail.noofsisters?._id
          ? this.mydetail.noofsisters?._id
          : null,
        noyubrothers: this.mydetail.noyubrothers
          ? this.mydetail.noyubrothers
          : null,
        noyusisters: this.mydetail.noyusisters
          ? this.mydetail.noyusisters
          : null,
        nbm: this.mydetail.nbm ? this.mydetail.nbm : null,
        nsm: this.mydetail.nsm ? this.mydetail.nsm : null,
      });
      console.log(this.editfamilydetailform.value);
    }
  }

  cancelfamilyform() {
    this.togglecheckfamily = true;
  }

  updatefamily() {
    console.log(this.editfamilydetailform.value);
    this.userService
      .addotheruserdetails(this.editfamilydetailform.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success('Family Details Updated Successfully');
          this.togglecheckfamily = true;
          this.editfamilydetailform.reset();
          this.getmydetails();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  partnerexp() {
    console.log('button clicked');
    if (this.togglecheckpartner == false) {
      this.togglecheckpartner = true;
    } else {
      this.togglecheckpartner = false;
    }
  }
  physicaldetail() {
    console.log('button clicked');
    if (this.togglecheckphysical == false) {
      this.togglecheckphysical = true;
    } else {
      this.togglecheckphysical = false;
    }
  }
  properties() {
    console.log('button clicked');
    if (this.togglecheckproperties == false) {
      this.togglecheckproperties = true;
    } else {
      this.togglecheckproperties = false;
    }
  }
  horoscope() {
    console.log('button clicked');
    if (this.togglecheckhoroscope == false) {
      this.togglecheckhoroscope = true;
    } else {
      this.togglecheckhoroscope = false;
    }
  }
}
