import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component({
  selector: 'app-photo-file',
  templateUrl: './photo-file.component.html',
  styleUrls: ['./photo-file.component.scss'],
})
export class PhotoFileComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  mydetail:any

  fileInfos: Observable<any>;

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

  changeimage = 'assets/img/events/img-3.png';

  dumPhoto = 'assets/img/me.jpg';
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';

  photo1form: FormGroup;
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService,
    public routes: Router,
    public userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getmydetails()
    this.photo1form = this.formBuilder.group({
      Photo1: [''],
      Photo2: [''],
      Photo3: [''],
    });
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

  tempblob: any;

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

  submitphotos() {
    console.log(this.photo1form.value);
    this.userService.upload(this.photo1form.value).subscribe(
      (response: any) => {
        console.log(response);
        this.routes.navigate(['/vertical-listings-left-sidebar']);
      },
      (err) => {
        this.message = 'Could not upload the file!';
        this.toastr.error(err.error.msg);
        console.log(err);
      }
    );
  }

  movetouserhome(){
    this.routes.navigate(['/user-dashboard']);
  }

  uploadimage1() {
    console.log('req to upload image');
    console.log(this.imageupload1.value);
    this.userService.upload(this.imageupload1.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Image Uploaded Successfully');
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
  }

  uploadimage2() {
    console.log('req to upload image');
    console.log(this.imageupload2.value);
    this.userService.upload(this.imageupload2.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Image Uploaded Successfully');
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
  }

  uploadimage3() {
    console.log('req to upload image');
    console.log(this.imageupload3.value);
    this.userService.upload(this.imageupload3.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Image Uploaded Successfully');
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
}
