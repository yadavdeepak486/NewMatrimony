import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  addlogo = false;
  alllogo: any;
  constructor(
    private formBuilder: FormBuilder,
    public adminService: AdminService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getalllogos();
  }
  breadcrumb = [
    {
      title: 'Logo',
      subTitle: 'Website',
    },
  ];

  addlogoform() {
    this.addlogo = true;
    console.log('addlogo clicked');
  }

  cancellogoform() {
    this.addlogo = false;
    console.log('cancel logo clicked');
  }

  getonelogo() {
    this.toastr.info('Implimentation to be done');
  }

  deletelogo() {
    this.toastr.info('Implimentation to be done');
  }

  getalllogos() {
    this.adminService.getalllogo().subscribe(
      (response: any) => {
        console.log(response);
        this.alllogo = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
