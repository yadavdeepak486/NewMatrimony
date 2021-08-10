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
  alllogo: any;
  deffilePath1 = 'assets/img/couple-vector.png';
  tosendpath: any;
  logoform: FormGroup;
  filePath1: any;
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
      sortorder: '',
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

  cancellogoform() {
    this.addlogo = false;
    console.log('cancel logo clicked');
  }

  getonelogo() {
    this.toastr.info('Implimentation to be done');
  }

  deletelogo() {
    this.toastr.info('Implimentation to be done');
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
    this.adminService.addhappystory(this.logoform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.getalllogos();
        this.getalllogos();
        this.logoform.reset();
        this.addlogo = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
