import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  editmode: boolean = false;
  allcountry: any;
  allcountryrest: any;
  selectedcountry: any;

  country = new FormGroup({
    isoCode: new FormControl(''),
    phonecode: new FormControl(''),
    name: new FormControl(''),
  });

  editcountry = new FormGroup({
    id: new FormControl(''),
    isoCode: new FormControl(''),
    phonecode: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallcountry();
    this.getallcountryfromrest();
  }
  breadcrumb = [
    {
      title: 'Country',
      subTitle: 'Categories',
    },
  ];

  getallcountryfromrest() {
    // this.adminService.allcountryfromrest().subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     this.allcountryrest = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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

  getonecountry(id) {
    this.adminService.getonecountry(id).subscribe(
      (response: any) => {
        console.log(id);
        console.log(response);
        this.editmode = true;
        this.selectedcountry = response.data;
        this.editcountry.setValue({
          isoCode: response.data.isoCode,
          name: response.data.name,
          phonecode: response.data.phonecode,
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

  updatecountry() {
    console.log(this.editcountry.value, this.editcountry.value.id);
    this.adminService
      .editcountry(this.editcountry.value.id, this.editcountry.value)
      .subscribe(
        (response: any) => {
          this.getallcountry();
          this.toastr.success('Country updated succesfully');
          this.editcountry.reset();
          this.editmode = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }

  submitForm() {
    console.log(this.country.value);
    this.adminService.addcountry(this.country.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Country added succesfully');
        this.getallcountry();
        this.getallcountry();
        this.country.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletecountry(id) {
    console.log(id);
    this.adminService.deletecountry(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Country deleted succesfully');
        this.getallcountry();
      },
      (error) => {
        this.toastr.error('Error Occured');
        console.log(error);
      }
    );
  }
}
