import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  addlogo = false;
  editlogo = false;
  alllogo: any;
  deffilePath1 = 'assets/img/couple-vector.png';
  tosendpath: any;
  logoform: FormGroup;
  editlogoform: FormGroup;
  filePath1: any;
  filePath2: any;
  getlogo: any;
  constructor(
    private formBuilder: FormBuilder,
    public adminService: AdminService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getalllogos();
    this.logoform = this.formBuilder.group({
      title: '',
      website: '',
      logo: [''],
    });
  }
  breadcrumb = [
    {
      title: 'Logo',
      subTitle: 'Website',
    },
  ];

  addlogoform() {
    this.addlogo = true;
    console.log('addlogo clicked');
  }

  imagePreview1(e) {
    const file = e.target.files[0];
    if (file) {
      this.logoform.get('logo').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath1 = reader.result;
    };
  }

  imageeditPreview(e) {
    const file = e.target.files[0];
    if (file) {
      this.editlogoform.get('logo').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath2 = reader.result;
    };
  }

  cancellogoform() {
    this.editlogoform.reset();
    this.editlogo = false;
  }

  getonelogo(id) {
    console.log(id);
    this.editlogo = true;
    this.editlogoform = this.formBuilder.group({
      id: '',
      title: '',
      website: '',
      logo: [''],
    });
    this.adminService.onelogo(id).subscribe(
      (response: any) => {
        console.log(response);
        this.editlogoform.setValue({
          id: response.data?._id ? response.data?._id : null,
          title: response.data?.title ? response.data?.title : null,
          website: response.data?.website ? response.data?.website : null,
          logo: [response.data?.logo ? response.data?.logo : null],
        });
        this.getlogo = response?.data?.logo;
        console.log(this.editlogoform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  canceleditlogoform() {
    this.editlogoform.reset();
    this.editlogo = false;
  }

  deletelogo(id) {
    console.log(id);
    this.adminService.deletelogo(id).subscribe(
      (response: any) => {
        console.log(response);
        // this.allstory = response.data;
        this.toastr.info('Logo deleted successfully');
        this.getalllogos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getalllogos() {
    this.adminService.getalllogo().subscribe(
      (response: any) => {
        console.log(response);
        this.alllogo = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitForm() {
    console.log(this.logoform.value);
    this.adminService.addlogo(this.logoform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.getalllogos();
        this.getalllogos();
        this.logoform.reset();
        this.filePath1 = '';
        this.addlogo = false;
        this.toastr.success('Logo added Successfully');
      },
      (error) => {
        console.log(error);
        this.toastr.error(error?.error?.msg);
      }
    );
  }

  updatelogoForm() {
    console.log(this.editlogoform.value.id);
    console.log(this.editlogoform.value);
    this.adminService
      .editlogo(this.editlogoform.value.id, this.editlogoform.value)
      .subscribe(
        (response: any) => {
          this.getalllogos();
          this.toastr.success('Logo updated succesfully');
          this.editlogoform.reset();
          this.editlogo = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }
}
