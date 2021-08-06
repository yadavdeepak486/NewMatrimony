import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-happy-stories',
  templateUrl: './happy-stories.component.html',
  styleUrls: ['./happy-stories.component.scss'],
})
export class HappyStoriesComponent implements OnInit {
  content: any = '';
  allstory: any;
  addstory = false;
  filePath1: any = 'assets/img/couple-vector.png';
  photo1form: FormGroup;
  selectedFiles: FileList;

  //filePath1: any;
  tosendpath: any;
  constructor(
    private formBuilder: FormBuilder,
    public adminService: AdminService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallhappystories();
    this.photo1form = this.formBuilder.group({
      Photo1: [''],
    });
  }
  breadcrumb = [
    {
      title: 'Happy Stories',
      subTitle: 'Dashboard',
    },
  ];

  getallhappystories() {
    this.adminService.getallhappystory().subscribe(
      (response: any) => {
        console.log(response);
        this.allstory = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonestory() {
    this.toastr.info('Implimentation to be done');
  }

  deletestory() {
    this.toastr.info('Implimentation to be done');
  }

  imagePreview(e, digit) {
    console.log(digit);
    this.selectedFiles = e.target.files;

    const file = e.target.files[0];
    console.log(file);
    this.photo1form.get('Photo1').setValue(file);
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    console.log(k);
    this.tosendpath = e.target.files.item(0);
    console.log(this.tosendpath);
    reader.onload = (_event) => {
      this.filePath1 = reader.result;
    };
  }

  blured = false;
  focused = false;

  created(event) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event);
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event);
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

  addstoryform() {
    this.addstory = true;
    console.log('addstory clicked');
  }

  cancelstoryform() {
    this.addstory = false;
    console.log('cancel story clicked');
  }
}
