import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  editmode: boolean = false;
  allstate: any;
  allcity: any;
  selectedcity: any;

  city = new FormGroup({
    state: new FormControl(''),
    name: new FormControl(''),
  });

  editcity = new FormGroup({
    id: new FormControl(''),
    state: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallcity();
    this.getallstate();
  }
  breadcrumb = [
    {
      title: 'City',
      subTitle: 'Categories',
    },
  ];

  getallstate() {
    this.adminService.allstate().subscribe(
      (response: any) => {
        console.log(response);
        this.allstate = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallcity() {
    this.adminService.allcity().subscribe(
      (response: any) => {
        console.log(response);
        this.allcity = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonecity(id) {
    this.adminService.getonecity(id).subscribe(
      (response: any) => {
        console.log(response);
        this.editmode = true;
        this.selectedcity = response.data;
        this.editcity.setValue({
          state: response.data.state._id,
          name: response.data.name,
          id: response.data._id,
        });
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  cancelupdate() {
    this.editmode = false;
  }

  updatecity() {
    this.adminService
      .editcity(this.editcity.value.id, this.editcity.value)
      .subscribe(
        (response: any) => {
          this.getallcity();
          this.toastr.success('City updated succesfully');
          this.editcity.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    this.adminService.addcity(this.city.value).subscribe(
      (response: any) => {
        this.toastr.success('City added succesfully');
        this.getallcity();
        this.getallcity();
        this.city.reset();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  deletecity(id) {
    this.adminService.deletecity(id).subscribe(
      (response: any) => {
        this.toastr.info('City deleted succesfully');
        this.getallcity();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }
}
