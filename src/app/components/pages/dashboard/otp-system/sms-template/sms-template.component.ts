import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-sms-template',
  templateUrl: './sms-template.component.html',
  styleUrls: ['./sms-template.component.scss'],
})
export class SmsTemplateComponent implements OnInit {
  content: any = '';
  data: any;

  blured = false;
  focused = false;

  otpform = new FormGroup({
    key: new FormControl('otp'),
    template: new FormControl(''),
  });

  accopform = new FormGroup({
    key: new FormControl('accopen'),
    template: new FormControl(''),
  });

  accappform = new FormGroup({
    key: new FormControl('accapp'),
    template: new FormControl(''),
  });

  manualpayform = new FormGroup({
    key: new FormControl('manualpay'),
    template: new FormControl(''),
  });

  constructor(
    public adminService: AdminService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getotptemplate();
  }
  breadcrumb = [
    {
      title: 'Sms-template',
      subTitle: 'Members',
    },
  ];

  created(event) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event);
  }

  changedEditor(event: EditorChangeContent) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event);
    console.log('editor-change', event?.html);
    this.data = event?.html;
  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event);
    this.focused = true;
    this.blured = false;
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event);
    this.focused = false;
    this.blured = true;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getotptemplate() {
    this.adminService.viewsmstemplate('otp').subscribe(
      (response: any) => {
        console.log(response);
        this.otpform.setValue({
          template: response.data?.template ? response.data?.template : null,
          key: response.data?.key ? response.data?.key : null,
        });
        console.log(this.otpform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getaccopentemplate() {
    this.adminService.viewsmstemplate('accopen').subscribe(
      (response: any) => {
        console.log(response);
        this.otpform.setValue({
          template: response.data?.template ? response.data?.template : null,
          key: response.data?.key ? response.data?.key : null,
        });
        console.log(this.otpform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getaccapptemplate() {
    this.adminService.viewsmstemplate('accapp').subscribe(
      (response: any) => {
        console.log(response);
        this.otpform.setValue({
          template: response.data?.template ? response.data?.template : null,
          key: response.data?.key ? response.data?.key : null,
        });
        console.log(this.otpform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getmanualpaytemplate() {
    this.adminService.viewsmstemplate('manualpay').subscribe(
      (response: any) => {
        console.log(response);
        this.otpform.setValue({
          template: response.data?.template ? response.data?.template : null,
          key: response.data?.key ? response.data?.key : null,
        });
        console.log(this.otpform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitotpform() {
    console.log(this.otpform.value);
    this.adminService.addsmstemplateform(this.otpform.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitaccopform() {
    console.log(this.accopform.value);
    this.adminService.addsmstemplateform(this.accopform.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitaccappform() {
    console.log(this.accappform.value);
    this.adminService.addsmstemplateform(this.accappform.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitmanualpayform() {
    console.log(this.manualpayform.value);
    this.adminService.addsmstemplateform(this.manualpayform.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
