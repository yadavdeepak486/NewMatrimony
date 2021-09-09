import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-caste',
  templateUrl: './caste.component.html',
  styleUrls: ['./caste.component.scss'],
})
export class CasteComponent implements OnInit {
  editmode: boolean = false;
  togglecheck: boolean = true;
  allcaste: any;
  allreligion: any;
  allreligionbasedcaste: any;
  selectedcaste: any;
  caste = new FormGroup({
    sortorder: new FormControl(''),
    religion: new FormControl('60ded92dd0379344c26c3cec'),
    name: new FormControl(''),
  });

  editcaste = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    religion: new FormControl(''),
    name: new FormControl(''),
  });
  getallreligionbasedcaste: any;
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallcaste();
    this.getallreligion();
  }
  breadcrumb = [
    {
      title: 'Caste',
      subTitle: 'Categories',
    },
  ];

  getallreligion() {
    this.adminService.getallreligion().subscribe(
      (response: any) => {
        // console.log(response)
        this.allreligion = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallcaste() {
    this.adminService.getallcaste().subscribe(
      (response: any) => {
        console.log(response);
        this.allcaste = response.data;
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  getonecaste(id) {
    this.adminService.getonecaste(id).subscribe(
      (response: any) => {
        //console.log(id)
        //console.log(response)
        //console.log(response.data.religion._id)
        this.editmode = true;
        this.selectedcaste = response.data;

        this.editcaste.setValue({
          sortorder: response.data.sortorder,
          religion: response.data.religion._id,
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

  updatecaste() {
    //console.log(this.editcaste.value, this.editcaste.value.id)
    this.adminService
      .editcaste(this.editcaste.value.id, this.editcaste.value)
      .subscribe(
        (response: any) => {
          this.getallcaste();
          this.toastr.success('Caste updated succesfully');
          this.editcaste.reset();
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
    this.adminService.addcaste(this.caste.value).subscribe(
      (response: any) => {
        //console.log(response)
        this.toastr.success('Caste added succesfully');
        this.getallcaste();
        this.getallcaste();
        this.caste.reset();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  deletecaste(id) {
    //console.log(id);
    this.adminService.deletecaste(id).subscribe(
      (response: any) => {
        //console.log(response)
        this.toastr.info('Caste deleted succesfully');
        this.getallcaste();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  castebasedonreg() {
    console.log('button clicked');
    if (this.togglecheck == false) {
      this.togglecheck = true;
    } else {
      this.togglecheck = false;
    }
  }

  religionbasedcaste(id) {
    console.log(id);
    // this.adminService.religionbasedcaste(id).subscribe(
    //   (response: any) => {
    //     //console.log(response)
    //     this.getallcaste();
    //   },
    //   (error) => {
    //     this.toastr.error('Error occured');
    //     console.log(error);
    //   }
    // );
  }
}
