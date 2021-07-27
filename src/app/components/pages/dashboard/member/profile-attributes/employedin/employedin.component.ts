import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-employedin',
  templateUrl: './employedin.component.html',
  styleUrls: ['./employedin.component.scss'],
})
export class EmployedinComponent implements OnInit {
  editmode: boolean = false;
  allemployedin: any;
  selectedemployedin: any;

  employedin = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editemployedin = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallemployedin();
  }
  breadcrumb = [
    {
      title: 'Employedin',
      subTitle: 'Categories',
    },
  ];
  getallemployedin() {
    this.adminService.allemployedin().subscribe(
      (response: any) => {
        console.log(response);
        this.allemployedin = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getoneemployedin(id) {
    this.adminService.getoneemployedin(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedemployedin = response.data;
        this.editemployedin.setValue({
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

  updateemployedin() {
    console.log(this.editemployedin.value, this.editemployedin.value.id);
    this.adminService
      .editemployedin(this.editemployedin.value.id, this.editemployedin.value)
      .subscribe(
        (response: any) => {
          this.getallemployedin();
          this.toastr.success('Employedin updated succesfully');
          this.editemployedin.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.employedin.value);
    this.adminService.addemployedin(this.employedin.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Employedin added succesfully');
        this.getallemployedin();
        this.getallemployedin();
        this.employedin.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteemployedin(id) {
    console.log(id);
    this.adminService.deleteemployedin(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Employedin deleted succesfully');
        this.getallemployedin();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
