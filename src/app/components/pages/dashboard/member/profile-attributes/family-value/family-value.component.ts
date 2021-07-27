import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-family-value',
  templateUrl: './family-value.component.html',
  styleUrls: ['./family-value.component.scss'],
})
export class FamilyValueComponent implements OnInit {
  editmode: boolean = false;
  allfamilyvalues: any;
  selectedfamilyvalues: any;
  familyvalues = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  editfamilyvalues = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallfamilyvalues();
  }
  breadcrumb = [
    {
      title: 'Family Values',
      subTitle: 'Categories',
    },
  ];
  getallfamilyvalues() {
    this.adminService.allfamilyvalues().subscribe(
      (response: any) => {
        console.log(response);
        this.allfamilyvalues = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonefamilyvalues(id) {
    this.adminService.getonefamilyvalues(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedfamilyvalues = response.data;
        this.editfamilyvalues.setValue({
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

  updatefamilyvalues() {
    console.log(this.editfamilyvalues.value, this.editfamilyvalues.value.id);
    this.adminService
      .editfamilyvalues(
        this.editfamilyvalues.value.id,
        this.editfamilyvalues.value
      )
      .subscribe(
        (response: any) => {
          this.getallfamilyvalues();
          this.toastr.success('Family Values updated succesfully');
          this.editfamilyvalues.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.familyvalues.value);
    this.adminService.addfamilyvalues(this.familyvalues.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Family Values added succesfully');
        this.getallfamilyvalues();
        this.getallfamilyvalues();
        this.familyvalues.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletefamilyvalues(id) {
    console.log(id);
    this.adminService.deletefamilyvalues(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Family Values deleted succesfully');
        this.getallfamilyvalues();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
