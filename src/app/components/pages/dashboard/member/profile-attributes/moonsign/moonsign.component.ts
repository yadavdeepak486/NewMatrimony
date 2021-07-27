import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-moonsign',
  templateUrl: './moonsign.component.html',
  styleUrls: ['./moonsign.component.scss'],
})
export class MoonsignComponent implements OnInit {
  editmode: boolean = false;
  allmoonsign: any;
  selectedmoonsign: any;

  moonsign = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editmoonsign = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallmoonsign();
  }
  breadcrumb = [
    {
      title: 'Moonsign',
      subTitle: 'Categories',
    },
  ];
  getallmoonsign() {
    this.adminService.allmoonsign().subscribe(
      (response: any) => {
        console.log(response);
        this.allmoonsign = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonemoonsign(id) {
    this.adminService.getonemoonsign(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedmoonsign = response.data;
        this.editmoonsign.setValue({
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

  updatemoonsign() {
    console.log(this.editmoonsign.value, this.editmoonsign.value.id);
    this.adminService
      .editmoonsign(this.editmoonsign.value.id, this.editmoonsign.value)
      .subscribe(
        (response: any) => {
          this.getallmoonsign();
          this.toastr.success('Moonsign updated succesfully');
          this.editmoonsign.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.moonsign.value);
    this.adminService.addmoonsign(this.moonsign.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Moonsign added succesfully');
        this.getallmoonsign();
        this.getallmoonsign();
        this.moonsign.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletemoonsign(id) {
    console.log(id);
    this.adminService.deletemoonsign(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Moonsign deleted succesfully');
        this.getallmoonsign();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
