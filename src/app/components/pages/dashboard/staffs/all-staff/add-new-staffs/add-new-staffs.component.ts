import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-add-new-staffs',
  templateUrl: './add-new-staffs.component.html',
  styleUrls: ['./add-new-staffs.component.scss'],
})
export class AddNewStaffsComponent implements OnInit {
  allrole: any;

  staff = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService,
    public routes: Router
  ) {}

  ngOnInit(): void {
    this.getallrole();
  }
  breadcrumb = [
    {
      title: 'Add New Staffs',
      subTitle: 'All Staffs',
    },
  ];
  getallrole() {
    this.adminService.getallrole().subscribe(
      (response: any) => {
        this.allrole = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitForm() {
    console.log(this.staff.value);
    this.adminService.addstaff(this.staff.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Staff added succesfully');
        this.staff.reset();
        this.routes.navigate(['/staffs/all-staff']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
