import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-family-status',
  templateUrl: './family-status.component.html',
  styleUrls: ['./family-status.component.scss'],
})
export class FamilyStatusComponent implements OnInit {
  editmode: boolean = false;
  allfamilystatus: any;
  selectedfamilystatus: any;
  familystatus = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editfamilystatus = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallfamilystatus();
  }
  breadcrumb = [
    {
      title: 'Family Status',
      subTitle: 'Categories',
    },
  ];
  getallfamilystatus() {
    this.adminService.allfamilystatus().subscribe(
      (response: any) => {
        console.log(response);
        this.allfamilystatus = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonefamilystatus(id) {
    this.adminService.getonefamilystatus(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedfamilystatus = response.data;
        this.editfamilystatus.setValue({
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

  updatefamilystatus() {
    console.log(this.editfamilystatus.value, this.editfamilystatus.value.id);
    this.adminService
      .editfamilystatus(
        this.editfamilystatus.value.id,
        this.editfamilystatus.value
      )
      .subscribe(
        (response: any) => {
          this.getallfamilystatus();
          this.toastr.success('Family Status updated succesfully');
          this.editfamilystatus.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.familystatus.value);
    this.adminService.addfamilystatus(this.familystatus.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Family Status added succesfully');
        this.getallfamilystatus();
        this.getallfamilystatus();
        this.familystatus.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletefamilystatus(id) {
    console.log(id);
    this.adminService.deletefamilystatus(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Family Status deleted succesfully');
        this.getallfamilystatus();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
