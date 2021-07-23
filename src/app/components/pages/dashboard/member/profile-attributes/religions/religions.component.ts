import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-religions',
  templateUrl: './religions.component.html',
  styleUrls: ['./religions.component.scss'],
})
export class ReligionsComponent implements OnInit {
  editmode: boolean = false;
  allreligion: any;
  selectedreligion: any;
  religion = new FormGroup({
    sortorder: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  editreligion = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallreligion();
  }
  breadcrumb = [
    {
      title: 'Religions',
      subTitle: 'Members',
    },
  ];

  getallreligion() {
    this.adminService.getallreligion().subscribe(
      (response: any) => {
        // console.log(response)
        this.allreligion = response.data;
      },
      (error) => {
        this.toastr.error('Some error occured');
        console.log(error);
      }
    );
  }

  getonereligion(id) {
    this.adminService.getonereligion(id).subscribe(
      (response: any) => {
        //console.log(id);
        //console.log(response);
        this.editmode = true;
        this.selectedreligion = response.data;
        this.editreligion.setValue({
          sortorder: response.data.sortorder,
          name: response.data.name,
          id: response.data._id,
        });
      },
      (error) => {
        this.toastr.error('Some error occured');
        console.log(error);
      }
    );
  }

  cancelupdate() {
    this.editmode = false;
  }

  updatereligion() {
    console.log(this.editreligion.value, this.editreligion.value.id);
    this.adminService
      .editreligion(this.editreligion.value.id, this.editreligion.value)
      .subscribe(
        (response: any) => {
          this.getallreligion();
          this.toastr.success('Religion updated succesfully');
          this.editreligion.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Some error occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.religion.value);
    this.adminService.addreligion(this.religion.value).subscribe(
      (response: any) => {
        //console.log(response);
        this.toastr.success('Religion added succesfully');
        this.getallreligion();
        this.getallreligion();
        this.religion.reset();
      },
      (error) => {
        this.toastr.error('Some error occured');
        console.log(error);
      }
    );
  }

  deletereligion(id) {
    console.log(id);
    this.adminService.deleterelgion(id).subscribe(
      (response: any) => {
        //console.log(response);
        this.toastr.info('Religion deleted succesfully');
        this.getallreligion();
      },
      (error) => {
        this.toastr.error('Some error occured');
        console.log(error);
      }
    );
  }
}
