import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.scss'],
})
export class AllStaffComponent implements OnInit {
  allstaff: any;
  allrole: any;
  toggleeditstaff: boolean = true;

  editstaffform = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    Email: new FormControl(''),
    Mobile: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallstaff();
    this.getallrole();
  }
  breadcrumb = [
    {
      title: 'All Staffs',
      subTitle: 'Staffs',
    },
  ];

  getallstaff() {
    this.adminService.getallstaff().subscribe(
      (response: any) => {
        this.allstaff = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonestaff() {
    this.toastr.info('Page under construction');
  }

  deletestaff(id) {
    //console.log(id);
    this.adminService.deletestaff(id).subscribe(
      (response: any) => {
        //console.log(response)
        this.toastr.info('Staff deleted succesfully');
        this.getallstaff();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  editstaff(id) {
    console.log('button clicked');
    console.log(id);
    if (this.toggleeditstaff == false) {
      this.toggleeditstaff = true;
    } else {
      this.toggleeditstaff = false;
    }

    this.adminService.getonestaff(id).subscribe(
      (response: any) => {
        console.log(response);
        this.editstaffform.setValue({
          id: response.data._id ? response.data._id : null,
          firstname: response.data.firstname ? response.data.firstname : null,
          lastname: response.data.lastname ? response.data.lastname : null,
          Email: response.data.Email ? response.data.Email : null,
          Mobile: response.data.Mobile ? response.data.Mobile : null,
          password: response.data.password ? response.data.password : null,
          role: response.data.role._id ? response.data.role._id : null,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatestaffForm() {
    console.log(this.editstaffform.value);
    this.adminService
      .editstaff(this.editstaffform.value.id, this.editstaffform.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.toggleeditstaff = true;
          this.editstaffform.reset();
          this.getallstaff();
        },
        (error) => {
          console.log(error);
        }
      );
  }

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

  cancelstaffedit() {
    this.toggleeditstaff = true;
    this.editstaffform.reset();
  }
}
