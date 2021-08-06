import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  editmode: boolean = false;
  alleducation: any;
  allcity: any;
  selectededucation: any;

  education = new FormGroup({
    sortorder: new FormControl(''),
    degree: new FormControl(''),
    place: new FormControl(''),
    name: new FormControl(''),
  });

  editeducation = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    degree: new FormControl(''),
    place: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getalleducation();
    this.getallcity();
  }
  breadcrumb = [
    {
      title: 'Education',
      subTitle: 'Categories',
    },
  ];

  getalleducation() {
    this.adminService.alleducation().subscribe(
      (response: any) => {
        console.log(response);
        this.alleducation = response.data;
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

  getoneeducation(id) {
    this.adminService.getoneeducation(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectededucation = response.data;
        this.editeducation.setValue({
          sortorder: response.data.sortorder,
          name: response.data.name,
          degree: response.data.degree,
          place: response.data.place,
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

  updateeducation() {
    console.log(this.editeducation.value, this.editeducation.value.id);
    this.adminService
      .editeducation(this.editeducation.value.id, this.editeducation.value)
      .subscribe(
        (response: any) => {
          this.getalleducation();
          this.toastr.success('Religion updated succesfully');
          this.editeducation.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.education.value);
    this.adminService.addeducation(this.education.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('education added succesfully');
        this.getalleducation();
        this.getalleducation();
        this.education.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteeducation(id) {
    console.log(id);
    this.adminService.deleteeducation(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('education deleted succesfully');
        this.getalleducation();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
