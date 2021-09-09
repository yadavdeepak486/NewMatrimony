import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  toggleaddpage: boolean = true;
  toggleeditpage: boolean = true; //toggleaddpage
  editpageaddform: any;
  content: any = '';
  data: any;
  blured = false;
  focused = false;

  allpages: any;
  pageform = new FormGroup({
    path: new FormControl(''),
    pagetitle: new FormControl(''),
    html: new FormControl(''),
  });

  editpageform = new FormGroup({
    path: new FormControl(''),
    pagetitle: new FormControl(''),
    html: new FormControl(''),
  });
  formBuilder: any;

  constructor(
    public adminService: AdminService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallpages();
  }
  breadcrumb = [
    {
      title: 'All Pages',
      subTitle: 'Dashboard',
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

  addpage() {
    console.log('button clicked');
    if (this.toggleaddpage == false) {
      this.toggleaddpage = true;
    } else {
      this.toggleaddpage = false;
    }
  }

  editpage(id) {
    console.log('button clicked');
    console.log(id);
    if (this.toggleeditpage == false) {
      this.toggleeditpage = true;
    } else {
      this.toggleeditpage = false;
    }
    this.adminService.getonepage(id).subscribe(
      (response: any) => {
        console.log(response);
        this.editpageform.setValue({
          pagetitle: response.data?.pagetitle ? response.data?.pagetitle : null,
          path: response.data?.path ? response.data?.path : null,
          html: response.data?.html ? response.data?.html : null,
        });
        console.log(this.editpageform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitForm() {
    console.log(this.pageform.value);
    this.adminService.addpageform(this.pageform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Page added successfully');
        this.pageform.reset();
        this.toggleaddpage = true;
        this.getallpages();
      },
      (error) => {
        console.log(error);
        this.toastr.error(error?.error?.msg);
      }
    );
  }

  canceladdpageform() {
    this.toggleaddpage = true;
    this.pageform.reset();
  }

  canceleditpageform() {
    this.toggleeditpage = true;
    this.pageform.reset();
  }

  getallpages() {
    this.adminService.getallpages().subscribe(
      (response: any) => {
        console.log(response);
        this.allpages = response.data;
      },
      (error) => {
        console.log(error);
        this.toastr.error(error?.error?.msg);
      }
    );
  }

  // getonepage(id) {
  //   console.log(id);
  //   this.editpageaddform = true;
  //   this.editpageaddform = this.formBuilder.group({
  //     pagetitle: '',
  //     path: '',
  //     html: '',

  //   });
  //   this.adminService.getonepage(id).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.editpageaddform.setValue({
  //         id: response.data?._id ? response.data?._id : null,
  //         pagetitle: response.data?.pagetitle ? response.data?.pagetitle : null,
  //         path: response.data?.path ? response.data?.path : null,
  //         html: [response.data?.html ? response.data?.html : true],
  //       });
  //       this.getallpages = response?.data?.logo;
  //       console.log(this.editpageaddform.value);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  deletepage(id) {
    console.log(id);
    this.adminService.deleteonepage(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('page deleted successfully');
        this.getallpages();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatepageForm() {
    console.log(this.editpageform.value.id);
    console.log(this.editpageform.value);
    this.adminService
      .editlogo(this.editpageform.value.id, this.editpageform.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.getallpages();
          this.toastr.success('Logo updated succesfully');
          this.editpageform.reset();
          this.editpageaddform = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }
}
