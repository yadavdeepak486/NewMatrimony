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
    edit_profileattribute: new FormControl(false),
    edit_plans: new FormControl(false),
    edit_userprofile: new FormControl(false),
    edit_staff: new FormControl(false),
    edit_happystory: new FormControl(false),
    edit_otpsystem: new FormControl(false),
    edit_websitesetup: new FormControl(false),
    edit_othersetting: new FormControl(false),
  });

  editrole = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
    edit_profileattribute: new FormControl(false),
    edit_plans: new FormControl(false),
    edit_userprofile: new FormControl(false),
    edit_staff: new FormControl(false),
    edit_happystory: new FormControl(false),
    edit_otpsystem: new FormControl(false),
    edit_websitesetup: new FormControl(false),
    edit_othersetting: new FormControl(false),
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
        console.log(response.data);
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
          sortorder: response.data.sortorder ? response.data.sortorder : null,
          name: response.data.name ? response.data.name : null,
          id: response.data._id ? response.data._id : null,
          edit_profileattribute: response.data.edit_profileattribute
            ? response.data.edit_profileattribute
            : false,
          edit_plans: response.data.edit_plans
            ? response.data.edit_plans
            : false,
          edit_userprofile: response.data.edit_userprofile
            ? response.data.edit_userprofile
            : false,
          edit_staff: response.data.edit_staff
            ? response.data.edit_staff
            : false,
          edit_happystory: response.data.edit_happystory
            ? response.data.edit_happystory
            : false,
          edit_otpsystem: response.data.edit_otpsystem
            ? response.data.edit_otpsystem
            : false,
          edit_websitesetup: response.data.edit_websitesetup
            ? response.data.edit_websitesetup
            : false,
          edit_othersetting: response.data.edit_othersetting
            ? response.data.edit_othersetting
            : false,
        });
        console.log(this.editrole.value);
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
