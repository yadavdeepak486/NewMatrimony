import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

import { base64StringToBlob } from 'blob-util';

@Component({
  selector: 'app-user-profile-one',
  templateUrl: './user-profile-one.component.html',
  styleUrls: ['./user-profile-one.component.scss'],
})
export class UserProfileOneComponent implements OnInit {
  mydetail: any;
  togglecontactdetail: boolean = true;
  toggleeverifyprofile: boolean = true;
  togglecheck: boolean = true;
  togglechecktwo: boolean = true;
  togglecheckoccupation: boolean = true;
  togglecheckreligous: boolean = true;
  togglecheckfamily: boolean = true;
  toggleabout: boolean = true;
  togglecheckpartner: boolean = true;
  togglecheckphysical: boolean = true;
  togglecheckproperties: boolean = true;
  togglecheckhoroscope: boolean = true;
  togglecheckhob: boolean = true;
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
  allstarsign: any;
  allmoonstarsign: any;

  educationslt = new FormControl();
  imageupload1: FormGroup;
  imageupload2: FormGroup;
  imageupload3: FormGroup;

  tosendpath: any;
  tosendblob: any;

  filePath1: any;
  filePath2: any;
  filePath3: any;

  readyupload1 = false;
  readyupload2 = false;
  readyupload3 = false;

  cropper1 = false;
  cropper2 = false;
  cropper3 = false;

  tempblob: any;

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
    childLivingWith: new FormControl(''),
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

  editphysicaldetailsform = new FormGroup({
    Height: new FormControl(''),
    BloodGroup: new FormControl(''),
    Bodytype: new FormControl(''),
    Smoke: new FormControl(''),
    spe_cases: new FormControl(''),
  });

  editcontactform = new FormGroup({
    Mobile: new FormControl(''),
    Phone: new FormControl(''),
    whatsapp_phone: new FormControl(''),
    ConfirmEmail: new FormControl(''),
    HomeTown: new FormControl(''),
  });

  eduoccueditform = new FormGroup({
    Education: new FormControl(''),
    EducationDetails: new FormControl(''),
    Occupation: new FormControl(''),
    OccupationDetail: new FormControl(''),
    Employedin: new FormControl(''),
    Annualincome: new FormControl(''),
  });

  aboutform = new FormGroup({
    Profile: new FormControl(''),
  });

  verifyform = new FormGroup({
    uploadid: new FormControl(''),
    email: new FormControl(''),
  });

  assetform = new FormGroup({
    own_agriland: new FormControl(''),
    own_commland: new FormControl(''),
    own_house: new FormControl(''),
    own_car: new FormControl(''),
  });

  horosform = new FormGroup({
    Manglik: new FormControl(''),
    TOB: new FormControl(''),
    POB: new FormControl(''),
    Star: new FormControl(''),
    Moonsign: new FormControl(''),
    Horosmatch: new FormControl(''),
  });

  hobbynotherform = new FormGroup({
    Hobbies: new FormControl(''),
  });

  partnerexpform = new FormGroup({
    PartnerExpectations: new FormControl(''),
    PE_FromAge: new FormControl(''),
    PE_ToAge: new FormControl(''),
    PE_Height: new FormControl(''),
    PE_Heightto: new FormControl(''),
    PE_HaveChildren: new FormControl(''),
    PE_Complexion: new FormControl(''),
    PE_MotherTongue: new FormControl(''),
    PE_Religion: new FormControl(''),
    PE_Caste: new FormControl(''),
    PE_Education: new FormControl(''),
    PE_Countrylivingin: new FormControl(''),
    PE_Residentstatus: new FormControl(''),
    PE_occupation: new FormControl(''),
    PE_manglik: new FormControl(''),
    PE_looking_for: new FormControl(''),
  });

  constructor(
    public userService: UserService,
    public adminService: AdminService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public routes: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getmydetails();
    this.getallprofilefor();
    this.getallreligion();
    this.getmaritalstatus();
    this.getalllanguage();
    this.getallheights();
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

  //========================================================
  imageChangedEvent: any = '';
  imageChangedEvent1: any = '';
  imageChangedEvent2: any = '';
  imageChangedEvent3: any = '';
  croppedImage1: any = '';
  croppedImage2: any = '';
  croppedImage3: any = '';
  filename1:any
  filename2:any
  filename3:any
  filetype1:any
  filetype2:any
  filetype3:any


  base64ToFile(data, filename) {

    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped1(event: ImageCroppedEvent) {
    this.croppedImage1 = event.base64;
    console.log(event);

    if (this.croppedImage1) {
      this.tempblob = this.base64ToFile(
        event.base64,this.filename1
      );
      console.log(this.tempblob)

    this.imageupload1.get('Photo1').setValue(this.tempblob);
    }
  }

  imageCropped2(event: ImageCroppedEvent) {
    this.croppedImage2 = event.base64;
    console.log(event);

    if (this.croppedImage2) {
     this.tempblob = this.base64ToFile(
        event.base64,this.filename2
      );
      console.log(this.tempblob)
      this.imageupload2.get('Photo2').setValue(this.tempblob);

    }
  }

  imageCropped3(event: ImageCroppedEvent) {
    this.croppedImage3 = event.base64;
    console.log(event);

    if (this.croppedImage3) {
      this.tempblob = this.base64ToFile(
        event.base64,this.filename3
      );
      console.log(this.tempblob)
      this.imageupload3.get('Photo3').setValue(this.tempblob);
    }
  }

  imageLoaded() {}
  cropperReady() {}
  loadImageFailed() {}
  //=======================================================

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
    this.imageChangedEvent1 = e;
    const file = e.target.files[0];
    this.cropper1 = true;
    console.log(file);
    this.filename1 = file.name
    this.filetype1 = file.type
    // this.imageupload1.get('Photo1').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath1 = reader.result;
    };
    this.readyupload1 = true;
  }

  imagePreview2(e) {
    this.imageChangedEvent2 = e;
    const file = e.target.files[0];
    this.cropper2 = true;
    console.log(file);
    this.filename2 = file.name
    this.filetype2 = file.type
    // this.imageupload2.get('Photo2').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath2 = reader.result;
    };
    this.readyupload2 = true;
  }

  imagePreview3(e) {
    this.imageChangedEvent3 = e;
    const file = e.target.files[0];
    this.cropper3 = true;
    console.log(file);
    this.filename3 = file.name
    this.filetype3 = file.type
    // this.imageupload3.get('Photo3').setValue(file);
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
        this.cropper1 = false
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
    this.cropper1 = false
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
        this.cropper2 = false
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
    this.cropper2 = false

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
        this.cropper3 = false
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
    this.cropper3 = false
  }

  //drop downs
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
    if(id !== null){
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

  allstar() {
    this.adminService.allstar().subscribe(
      (response: any) => {
        this.allstarsign = response.data;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  allmoonstar() {
    this.adminService.allmoonsign().subscribe(
      (response: any) => {
        this.allmoonstarsign = response.data;
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
        childLivingWith: this.mydetail.childLivingWith
          ? this.mydetail.childLivingWith
          : null,
        TOB: this.mydetail.TOB ? this.mydetail.TOB : null,
      });
      console.log(this.editbasicinformation.value);
      console.log(this.editbasicinformation.value.DOB);
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
    if (this.mydetail !== undefined) {
      this.editcontactform.setValue({
        Mobile: this.mydetail.Mobile ? this.mydetail.Mobile : null,
        Phone: this.mydetail.Phone ? this.mydetail.Phone : null,
        whatsapp_phone: this.mydetail.whatsapp_phone
          ? this.mydetail.whatsapp_phone
          : null,
        ConfirmEmail: this.mydetail.ConfirmEmail
          ? this.mydetail.ConfirmEmail
          : null,
        HomeTown: this.mydetail.HomeTown ? this.mydetail.HomeTown : null,
      });
      console.log(this.editcontactform.value);
    }
  }

  formabout() {
    console.log('button clicked');
    if (this.toggleabout == false) {
      this.toggleabout = true;
    } else {
      this.toggleabout = false;
    }
    if (this.mydetail !== undefined) {
      this.aboutform.setValue({
        Profile: this.mydetail.Profile ? this.mydetail.Profile : null,
      });
      console.log(this.aboutform.value);
    }
  }

  formoccupation() {
    console.log('button clicked');
    if (this.togglecheckoccupation == false) {
      this.togglecheckoccupation = true;
    } else {
      this.togglecheckoccupation = false;
    }
    this.alleducations();
    this.alloccupations();
    this.allemployedins();
    if (this.mydetail !== undefined) {
      this.hobbynotherform.setValue({
        Hobbies: this.mydetail.Hobbies ? this.mydetail.Hobbies : null,
      });
      console.log(this.hobbynotherform.value);
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
          ? this.mydetail.Familyvalues._id
          : null,
        FamilyStatus: this.mydetail.FamilyStatus
          ? this.mydetail.FamilyStatus._id
          : null,
        Fathersoccupation: this.mydetail.Fathersoccupation
          ? this.mydetail.Fathersoccupation
          : null,
        Mothersoccupation: this.mydetail.Mothersoccupation
          ? this.mydetail.Mothersoccupation
          : null,
        FamilyOrigin: this.mydetail?.FamilyOrigin
          ? this.mydetail.FamilyOrigin
          : null,
        noofbrothers: this.mydetail?.noofbrothers
          ? this.mydetail.noofbrothers
          : null,
        noofsisters: this.mydetail.noofsisters
          ? this.mydetail.noofsisters
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

  cancelphysicalform() {
    this.togglecheckphysical = true;
    this.editphysicaldetailsform.reset();
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

  updatehobbynother() {
    console.log(this.hobbynotherform.value);
    this.userService.addotheruserdetails(this.hobbynotherform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Hobbies Updated Successfully');
        this.togglecheckhob = true;
        this.hobbynotherform.reset();
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateabout() {
    console.log(this.aboutform.value);
    this.userService.addotheruserdetails(this.aboutform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('About Updated Successfully');
        this.toggleabout = true;
        this.aboutform.reset();
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateeduoccu() {
    console.log(this.eduoccueditform.value);
    this.userService.addotheruserdetails(this.eduoccueditform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success(
          'Education/Occupation Details Updated Successfully'
        );
        this.togglecheckoccupation = true;
        this.eduoccueditform.reset();
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatecontactdetails() {
    console.log(this.editcontactform.value);
    this.userService.addotheruserdetails(this.editcontactform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Contact Details Updated Successfully');
        this.togglechecktwo = true;
        this.editcontactform.reset();
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelcontactform() {
    this.togglechecktwo = true;
    this.editcontactform.reset();
  }

  cancelaboutform() {
    this.toggleabout = true;
    this.aboutform.reset();
  }

  cancelhobotherform() {
    this.togglecheckhob = true;
    this.hobbynotherform.reset();
  }

  cancelverifyform() {
    this.toggleeverifyprofile = true;
    this.verifyform.reset();
  }

  partnerexp() {
    console.log('button clicked');
    console.log(this.allheights);
    this.getallcaste();
    this.alleducations();
    this.alloccupations();
    if (this.togglecheckpartner == false) {
      this.togglecheckpartner = true;
    } else {
      this.togglecheckpartner = false;
    }
    if (this.mydetail !== undefined) {
      this.partnerexpform.setValue({
        PartnerExpectations: this.mydetail.PartnerExpectations
          ? this.mydetail.PartnerExpectations
          : null,
        PE_FromAge: this.mydetail.PE_FromAge ? this.mydetail.PE_FromAge : null,
        PE_ToAge: this.mydetail.PE_ToAge ? this.mydetail.PE_ToAge : null,
        PE_Height: this.mydetail.PE_Height ? this.mydetail.PE_Height : null,
        PE_Heightto: this.mydetail.PE_Heightto
          ? this.mydetail.PE_Heightto
          : null,
        PE_Complexion: this.mydetail.PE_Complexion
          ? this.mydetail.PE_Complexion
          : null,
        PE_HaveChildren: this.mydetail.PE_HaveChildren
          ? this.mydetail.PE_HaveChildren
          : null,
        PE_MotherTongue: this.mydetail.PE_MotherTongue._id
          ? this.mydetail.PE_MotherTongue._id
          : null,
        PE_Religion: this.mydetail.PE_Religion._id
          ? this.mydetail.PE_Religion._id
          : null,
        PE_Caste: this.mydetail.PE_Caste._id
          ? this.mydetail.PE_Caste._id
          : null,
        PE_Education: this.mydetail.PE_Education._id
          ? this.mydetail.PE_Education._id
          : null,
        PE_Countrylivingin: this.mydetail.PE_Countrylivingin._id
          ? this.mydetail.PE_Countrylivingin._id
          : null,
        PE_Residentstatus: this.mydetail.PE_Residentstatus._id
          ? this.mydetail.PE_Residentstatus._id
          : null,
        PE_occupation: this.mydetail.PE_occupation._id
          ? this.mydetail.PE_occupation._id
          : null,
        PE_manglik: this.mydetail.PE_manglik ? this.mydetail.PE_manglik : null,
        PE_looking_for: this.mydetail.PE_looking_for._id
          ? this.mydetail.PE_looking_for._id
          : null,
      });
      console.log(this.partnerexpform.value);
    }
  }

  updatepartnerexp() {
    console.log(this.partnerexpform.value);
    this.userService.addotheruserdetails(this.partnerexpform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Partner Preferrance Updated Successfully');
        this.togglecheckpartner = true;
        this.partnerexpform.reset();
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  hobnother() {
    console.log('button clicked');
    if (this.togglecheckhob == false) {
      this.togglecheckhob = true;
    } else {
      this.togglecheckhob = false;
    }
    if (this.mydetail !== undefined) {
      this.eduoccueditform.setValue({
        Education: this.mydetail.Education._id
          ? this.mydetail.Education._id
          : null,
        EducationDetails: this.mydetail.EducationDetails
          ? this.mydetail.EducationDetails
          : null,
        Occupation: this.mydetail.Occupation._id
          ? this.mydetail.Occupation._id
          : null,
        OccupationDetail: this.mydetail.OccupationDetail
          ? this.mydetail.OccupationDetail
          : null,
        Employedin: this.mydetail.Employedin._id
          ? this.mydetail.Employedin._id
          : null,
        Annualincome: this.mydetail.Annualincome
          ? this.mydetail.Annualincome
          : null,
      });
      console.log(this.eduoccueditform.value);
    }
  }

  physicaldetail() {
    console.log('button clicked');
    if (this.togglecheckphysical == false) {
      this.togglecheckphysical = true;
    } else {
      this.togglecheckphysical = false;
    }
    this.getallheights();
    if (this.mydetail !== undefined) {
      this.editphysicaldetailsform.setValue({
        Height: this.mydetail.Height._id ? this.mydetail.Height._id : null,
        BloodGroup: this.mydetail.BloodGroup ? this.mydetail.BloodGroup : null,
        Bodytype: this.mydetail.Bodytype ? this.mydetail.Bodytype : null,
        Smoke: this.mydetail.Smoke ? this.mydetail.Smoke : null,
        spe_cases: this.mydetail.spe_cases ? this.mydetail.spe_cases : null,
      });
      console.log(this.editphysicaldetailsform.value);
    }
  }

  updatephysicaldetails() {
    console.log(this.editphysicaldetailsform.value);
    this.userService
      .addotheruserdetails(this.editphysicaldetailsform.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success('Physical Details Updated Successfully');
          this.togglecheckphysical = true;
          this.editphysicaldetailsform.reset();
          this.getmydetails();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateasset() {
    console.log(this.assetform.value);
    this.userService.addotheruserdetails(this.assetform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Assets Detail Updated Successfully');
        this.togglecheckproperties = true;
        this.assetform.reset();
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelassetform() {
    this.togglecheckproperties = true;
    this.assetform.reset();
  }

  canceleduoccuform() {
    this.togglecheckoccupation = true;
    this.eduoccueditform.reset();
  }

  canceledpartnerdetailform() {
    this.togglecheckpartner = true;
    this.partnerexpform.reset();
  }

  properties() {
    console.log('button clicked');
    if (this.togglecheckproperties == false) {
      this.togglecheckproperties = true;
    } else {
      this.togglecheckproperties = false;
    }
    if (this.mydetail !== undefined) {
      this.assetform.setValue({
        own_agriland: this.mydetail.own_agriland
          ? this.mydetail.own_agriland
          : null,
        own_commland: this.mydetail.own_commland
          ? this.mydetail.own_commland
          : null,
        own_house: this.mydetail.own_house ? this.mydetail.own_house : null,
        own_car: this.mydetail.own_car ? this.mydetail.own_car : null,
      });
      console.log(this.assetform.value);
    }
  }

  horoscope() {
    console.log('button clicked');
    this.allstar();
    this.allmoonstar();
    if (this.togglecheckhoroscope == false) {
      this.togglecheckhoroscope = true;
    } else {
      this.togglecheckhoroscope = false;
    }
    if (this.mydetail !== undefined) {
      this.horosform.setValue({
        Manglik: this.mydetail.Manglik ? this.mydetail.Manglik : null,
        TOB: this.mydetail.TOB ? this.mydetail.TOB : null,
        POB: this.mydetail.POB ? this.mydetail.POB : null,
        Star: this.mydetail.Star._id ? this.mydetail.Star._id : null,
        Moonsign: this.mydetail.Moonsign._id
          ? this.mydetail.Moonsign._id
          : null,
        Horosmatch: this.mydetail.Horosmatch ? this.mydetail.Horosmatch : null,
      });
      console.log(this.horosform.value);
    }
  }

  updatehoros() {
    console.log(this.horosform.value);
    this.userService.addotheruserdetails(this.horosform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Horoscope Updated Successfully');
        this.togglecheckhoroscope = true;
        this.horosform.reset();
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelhoros() {
    this.togglecheckhoroscope = true;
    this.horosform.reset();
  }

  editverifyprofile() {
    console.log('button clicked');
    if (this.toggleeverifyprofile == false) {
      this.toggleeverifyprofile = true;
    } else {
      this.toggleeverifyprofile = false;
    }
  }


}

// @Component({
//   selector: 'contact-detail-dialog',
//   templateUrl: './contact-detail-dialog.html',
// })
// export class ContactDetailDialog {}
