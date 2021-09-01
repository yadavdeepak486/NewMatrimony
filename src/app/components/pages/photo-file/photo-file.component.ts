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

  fileInfos: Observable<any>;

  filePath1: any;
  filePath2: any;
  filePath3: any;

  tosendpath: any;
  changeimage = 'assets/img/events/img-3.png';

  photo1form: FormGroup;
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService,
    public routes: Router,
    public userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.photo1form = this.formBuilder.group({
      Photo1: [''],
      Photo2: [''],
      Photo3: [''],
    });
  }

  imagePreview(e) {
    const file = e.target.files[0];
    console.log(file);
    this.photo1form.get('Photo1').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    console.log(k);
    this.tosendpath = e.target.files.item(0);
    console.log(this.tosendpath);
    reader.onload = (_event) => {
      this.filePath1 = reader.result;
    };
  }

  imagePreview1(e) {
    const file = e.target.files[0];
    console.log(file);
    this.photo1form.get('Photo1').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath1 = reader.result;
    };
  }

  cancelupload1() {
    this.photo1form.get('Photo1').setValue('');
    this.filePath1 = '';
    console.log(this.photo1form.value);
  }

  imagePreview2(e) {
    const file = e.target.files[0];
    console.log(file);
    this.photo1form.get('Photo2').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath2 = reader.result;
    };
  }

  cancelupload2() {
    this.photo1form.get('Photo2').setValue('');
    this.filePath2 = '';
    console.log(this.photo1form.value);
  }

  imagePreview3(e) {
    const file = e.target.files[0];
    console.log(file);
    this.photo1form.get('Photo3').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath3 = reader.result;
    };
  }

  cancelupload3() {
    this.photo1form.get('Photo3').setValue('');
    this.filePath3 = '';
    console.log(this.photo1form.value);
  }

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
}
