import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss'],
})
export class OccupationComponent implements OnInit {
  editmode: boolean = false;
  alloccupation: any;
  selectedoccupation: any;

  occupation = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editoccupation = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getalloccupation();
  }
  breadcrumb = [
    {
      title: 'Occupation',
      subTitle: 'Categories',
    },
  ];
  getalloccupation() {
    this.adminService.alloccupation().subscribe(
      (response: any) => {
        console.log(response);
        this.alloccupation = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getoneoccupation(id) {
    this.adminService.getoneoccupation(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedoccupation = response.data;
        this.editoccupation.setValue({
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

  updateoccupation() {
    console.log(this.editoccupation.value, this.editoccupation.value.id);
    this.adminService
      .editoccupation(this.editoccupation.value.id, this.editoccupation.value)
      .subscribe(
        (response: any) => {
          this.getalloccupation();
          this.toastr.success('Occupation updated succesfully');
          this.editoccupation.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.occupation.value);
    this.adminService.addoccupation(this.occupation.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Occupation added succesfully');
        this.getalloccupation();
        this.getalloccupation();
        this.occupation.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteoccupation(id) {
    console.log(id);
    this.adminService.deleteoccupation(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Occupation deleted succesfully');
        this.getalloccupation();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
