import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-staff-role',
  templateUrl: './staff-role.component.html',
  styleUrls: ['./staff-role.component.scss'],
})
export class StaffRoleComponent implements OnInit {
  editmode: boolean = false;
  allrole: any;
  selectedrole: any;

  role = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
    edit_profileattribute: new FormControl(''),
    edit_plans: new FormControl(''),
    edit_userprofile: new FormControl(''),
    edit_staff: new FormControl(''),
    edit_happystory: new FormControl(''),
    edit_otpsystem: new FormControl(''),
    edit_websitesetup: new FormControl(''),
    edit_othersetting: new FormControl(''),
  });

  editrole = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
    edit_profileattribute: new FormControl(''),
    edit_plans: new FormControl(''),
    edit_userprofile: new FormControl(''),
    edit_staff: new FormControl(''),
    edit_happystory: new FormControl(''),
    edit_otpsystem: new FormControl(''),
    edit_websitesetup: new FormControl(''),
    edit_othersetting: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallrole();
  }
  breadcrumb = [
    {
      title: 'Staffs Role',
      subTitle: 'Staffs',
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

  getonerole(id) {
    this.adminService.getonerole(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedrole = response.data;
        this.editrole.setValue({
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

  updaterole() {
    console.log(this.editrole.value, this.editrole.value.id);
    this.adminService
      .editrole(this.editrole.value.id, this.editrole.value)
      .subscribe(
        (response: any) => {
          this.getallrole();
          this.toastr.success('role updated succesfully');
          this.editrole.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.role.value);
    this.adminService.addrole(this.role.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('role added succesfully');
        this.getallrole();
        this.getallrole();
        this.role.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleterole(id) {
    console.log(id);
    this.adminService.deleterole(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('role deleted succesfully');
        this.getallrole();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
