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

  submitphoto1() {
    this.currentFile = this.selectedFiles.item(0);
    // this.userService.upload(this.currentFile).subscribe(
    //   (event) => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.progress = Math.round((100 * event.loaded) / event.total);
    //     } else if (event instanceof HttpResponse) {
    //       this.message = event.body.message;
    //     }
    //     console.log(event);
    //     this.routes.navigate(['/vertical-listings-left-sidebar']);
    //   },
    //   (err) => {
    //     this.progress = 0;
    //     this.message = 'Could not upload the file!';
    //     this.currentFile = undefined;
    //     this.toastr.error(err.error.msg);
    //     console.log(err);
    //   }
    // );
    this.selectedFiles = undefined;
  }
}
