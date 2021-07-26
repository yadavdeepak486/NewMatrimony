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

  filePath: any;
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
    });
  }

  imagePreview(e) {
    this.selectedFiles = e.target.files;

    const file = e.target.files[0];
    console.log(file);
    this.photo1form.get('Photo1').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    console.log(k);
    this.tosendpath = e.target.files.item(0);
    console.log(this.tosendpath);
    reader.onload = (_event) => {
      this.filePath = reader.result;
    };
  }

  submitphoto1() {
    this.progress = 0;
    const id = localStorage.getItem('id');
    const str = id.replace(/"/g, '');
    console.log(str);
    this.currentFile = this.selectedFiles.item(0);
    this.userService.upload(str, this.currentFile).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
        console.log(event);
        this.routes.navigate(['/vertical-listings-left-sidebar']);
      },
      (err) => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
        this.toastr.error(err.error.msg);
        console.log(err);
      }
    );
    this.selectedFiles = undefined;

    // if (!this.photo1form.get('Photo1').value) {
    //   alert('Please fill valid details!');
    //   return false;
    // }
    // const formData = new FormData();
    // formData.append('Photo1', this.photo1form.get('Photo1').value);
    // console.log(str, this.photo1form.value);
    // this.userService.addimage(str, this.photo1form.value).subscribe(
    //   (response: any) => {
    //     this.toastr.success('Image Uploaded successfully');
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
