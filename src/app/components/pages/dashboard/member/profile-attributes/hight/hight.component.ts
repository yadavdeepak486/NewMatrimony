import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-hight',
  templateUrl: './hight.component.html',
  styleUrls: ['./hight.component.scss'],
})
export class HightComponent implements OnInit {
  editmode: boolean = false;
  allheight: any;
  selectedheight: any;

  height = new FormGroup({
    sortorder: new FormControl(''),
    cmvalue: new FormControl(''),
    feetinchvalue: new FormControl(''),
  });

  editheight = new FormGroup({
    id: new FormControl(''),
    cmvalue: new FormControl(''),
    feetinchvalue: new FormControl(''),
    sortorder: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallheight();
  }
  breadcrumb = [
    {
      title: '',
      subTitle: 'Categories',
    },
  ];
  getallheight() {
    this.adminService.getallheight().subscribe(
      (response: any) => {
        console.log(response);
        this.allheight = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getoneheight(id) {
    this.adminService.getoneheight(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedheight = response.data;
        this.editheight.setValue({
          sortorder: response.data.sortorder,
          feetinchvalue: response.data.feetinchvalue,
          cmvalue: response.data.cmvalue,
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

  updateheight() {
    console.log(this.editheight.value, this.editheight.value.id);
    this.adminService
      .editheight(this.editheight.value.id, this.editheight.value)
      .subscribe(
        (response: any) => {
          this.getallheight();
          this.toastr.success('Height updated succesfully');
          this.editheight.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.height.value);
    this.adminService.addheight(this.height.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Height added succesfully');
        this.getallheight();
        this.getallheight();
        this.height.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteheight(id) {
    console.log(id);
    this.adminService.deleteheight(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Height deleted succesfully');
        this.getallheight();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
