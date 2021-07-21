import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-marital-statuses',
  templateUrl: './marital-statuses.component.html',
  styleUrls: ['./marital-statuses.component.scss'],
})
export class MaritalStatusesComponent implements OnInit {
  editmode: boolean = false;
  allmaritalstatus: any;
  selectedmaritalstatus: any;
  maritalstatus = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editmaritalstatus = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallmaritalstatus();
  }
  breadcrumb = [
    {
      title: 'Marital Statuses',
      subTitle: 'Categories',
    },
  ];

  getallmaritalstatus() {
    this.adminService.getallmaritalstatus().subscribe(
      (response: any) => {
        // console.log(response)
        this.allmaritalstatus = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonemaritalstatus(id) {
    this.adminService.getonemaritalstatus(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedmaritalstatus = response.data;
        this.editmaritalstatus.setValue({
          sortorder: response.data.sortorder,
          name: response.data.name,
          id: response.data._id,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelupdate() {
    this.editmode = false;
  }

  updatemaritalstatus() {
    console.log(this.editmaritalstatus.value, this.editmaritalstatus.value.id);
    this.adminService
      .editmaritalstatus(
        this.editmaritalstatus.value.id,
        this.editmaritalstatus.value
      )
      .subscribe(
        (response: any) => {
          this.getallmaritalstatus();
          this.toastr.success('maritalstatus updated succesfully');
          this.editmaritalstatus.reset();
          this.editmode = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.maritalstatus.value);
    this.adminService.addmaritalstatus(this.maritalstatus.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('maritalstatus added succesfully');
        this.getallmaritalstatus();
        this.maritalstatus.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletemaritalstatus(id) {
    console.log(id);
    this.adminService.deleterelgion(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('maritalstatus deleted succesfully');
        this.getallmaritalstatus();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
