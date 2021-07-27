import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit {
  editmode: boolean = false;
  allstar: any;
  selectedstar: any;

  star = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editstar = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallstar();
  }
  breadcrumb = [
    {
      title: 'Star',
      subTitle: 'Categories',
    },
  ];
  getallstar() {
    this.adminService.allstar().subscribe(
      (response: any) => {
        console.log(response);
        this.allstar = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonestar(id) {
    this.adminService.getonestar(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedstar = response.data;
        this.editstar.setValue({
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

  updatestar() {
    console.log(this.editstar.value, this.editstar.value.id);
    this.adminService
      .editstar(this.editstar.value.id, this.editstar.value)
      .subscribe(
        (response: any) => {
          this.getallstar();
          this.toastr.success('Star updated succesfully');
          this.editstar.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.star.value);
    this.adminService.addstar(this.star.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Star added succesfully');
        this.getallstar();
        this.getallstar();
        this.star.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletestar(id) {
    console.log(id);
    this.adminService.deletestar(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Star deleted succesfully');
        this.getallstar();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
