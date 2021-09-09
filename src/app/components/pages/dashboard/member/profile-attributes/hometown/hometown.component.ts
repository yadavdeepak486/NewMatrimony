import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-hometown',
  templateUrl: './hometown.component.html',
  styleUrls: ['./hometown.component.scss'],
})
export class HometownComponent implements OnInit {
  editmode: boolean = false;
  allhometown: any;
  allcity: any;
  selectedhometown: any;

  hometown = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  edithometown = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallhometown();
    this.getallcity();
  }
  breadcrumb = [
    {
      title: 'Hometown',
      subTitle: 'Categories',
    },
  ];

  getallhometown() {
    this.adminService.allhometown().subscribe(
      (response: any) => {
        console.log(response);
        this.allhometown = response.data;
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

  getonehometown(id) {
    this.adminService.getonehometown(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedhometown = response.data;
        this.edithometown.setValue({
          sortorder: response.data.sortorder,
          name: response.data.name,
          // degree: response.data.degree,
          // place: response.data.place,
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

  updatehometown() {
    console.log(this.edithometown.value, this.edithometown.value.id);
    this.adminService
      .edithometown(this.edithometown.value.id, this.edithometown.value)
      .subscribe(
        (response: any) => {
          this.getallhometown();
          this.toastr.success('hometown updated succesfully');
          this.edithometown.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.hometown.value);
    this.adminService.addhometown(this.hometown.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('hometown added succesfully');
        this.getallhometown();
        this.getallhometown();
        this.hometown.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletehometown(id) {
    console.log(id);
    this.adminService.deletehometown(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('hometown deleted succesfully');
        this.getallhometown();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
