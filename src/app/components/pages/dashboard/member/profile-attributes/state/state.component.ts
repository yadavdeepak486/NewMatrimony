import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {
  editmode: boolean = false;
  allstate: any;
  allcountry: any;
  selectedstate: any;

  state = new FormGroup({
    isoCode: new FormControl(''),
    country: new FormControl('60ded92dd0379344c26c3cec'),
    name: new FormControl(''),
  });

  editstate = new FormGroup({
    id: new FormControl(''),
    isoCode: new FormControl(''),
    country: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallstate();
    this.getallcountry();
  }
  breadcrumb = [
    {
      title: 'State',
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

  getallcountry() {
    this.adminService.allcountry().subscribe(
      (response: any) => {
        console.log(response);
        this.allcountry = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonestate(id) {
    this.adminService.getonestate(id).subscribe(
      (response: any) => {
        this.editmode = true;
        this.selectedstate = response.data;

        this.editstate.setValue({
          isoCode: response.data.isoCode,
          country: response.data.country._id,
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

  updatestate() {
    //console.log(this.editstate.value, this.editstate.value.id)
    this.adminService
      .editstate(this.editstate.value.id, this.editstate.value)
      .subscribe(
        (response: any) => {
          this.getallstate();
          this.toastr.success('State updated succesfully');
          this.editstate.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    //console.log(this.caste.value);
    this.adminService.addstate(this.state.value).subscribe(
      (response: any) => {
        //console.log(response)
        this.toastr.success('State added succesfully');
        this.getallstate();
        this.getallstate();
        this.state.reset();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  deletestate(id) {
    //console.log(id);
    this.adminService.deletestate(id).subscribe(
      (response: any) => {
        //console.log(response)
        this.toastr.info('State deleted succesfully');
        this.getallstate();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }
}
