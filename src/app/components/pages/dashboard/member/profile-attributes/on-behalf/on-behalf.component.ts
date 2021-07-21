import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-on-behalf',
  templateUrl: './on-behalf.component.html',
  styleUrls: ['./on-behalf.component.scss'],
})
export class OnBehalfComponent implements OnInit {
  editmode: boolean = false;
  allprofilefor: any;
  selectedprofilefor: any;
  profilefor = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editprofilefor = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallprofilefor();
  }
  breadcrumb = [
    {
      title: 'On Behalves',
      subTitle: 'Categories',
    },
  ];

  getallprofilefor() {
    this.adminService.getallprofilefor().subscribe(
      (response: any) => {
        // console.log(response)
        this.allprofilefor = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getoneprofilefor(id) {
    this.adminService.getoneprofilefor(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedprofilefor = response.data;
        this.editprofilefor.setValue({
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

  updateprofilefor() {
    console.log(this.editprofilefor.value, this.editprofilefor.value.id);
    this.adminService
      .editprofilefor(this.editprofilefor.value.id, this.editprofilefor.value)
      .subscribe(
        (response: any) => {
          this.getallprofilefor();
          this.toastr.success('profilefor updated succesfully');
          this.editprofilefor.reset();
          this.editmode = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.profilefor.value);
    this.adminService.addprofilefor(this.profilefor.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('profilefor added succesfully');
        this.getallprofilefor();
        this.profilefor.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteprofilefor(id) {
    console.log(id);
    this.adminService.deleterelgion(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('profilefor deleted succesfully');
        this.getallprofilefor();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
