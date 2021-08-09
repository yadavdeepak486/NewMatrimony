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
  deffilePath1 = 'assets/img/couple-vector.png';
  filePath1: any;
  filePath2: any;
  filePath3: any;
  storyform: FormGroup;
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
    this.storyform = this.formBuilder.group({
      title: '',
      desc: '',
      sortorder: '',
      img1: [''],
      img2: [''],
      img3: [''],
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

  imagePreview1(e) {
    const file = e.target.files[0];
    if (file) {
      this.storyform.get('img1').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath1 = reader.result;
    };
  }

  imagePreview2(e) {
    const file = e.target.files[0];
    if (file) {
      this.storyform.get('img2').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath2 = reader.result;
    };
  }

  imagePreview3(e) {
    const file = e.target.files[0];
    if (file) {
      this.storyform.get('img3').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.filePath3 = reader.result;
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

  submitForm() {
    console.log(this.storyform.value);
    this.adminService.addhappystory(this.storyform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.getallhappystories();
        this.getallhappystories();
        this.storyform.reset();
        this.addstory = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
