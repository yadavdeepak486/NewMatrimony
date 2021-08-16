import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  editstory = false;
  deffilePath1 = 'assets/img/couple-vector.png';
  filePath1: any;
  filePath2: any;
  filePath3: any;

  editimg1: any;
  editimg2: any;
  editimg3: any;

  fileeditPath1: any;
  fileeditPath2: any;
  fileeditPath3: any;
  storyform: FormGroup;
  editstoryform: FormGroup;
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

    // this.editstoryform = this.formBuilder.group({
    //   title: '',
    //   desc: '',
    //   sortorder: '',
    //   img1: [''],
    //   img2: [''],
    //   img3: [''],
    // });
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

  getonestory(id) {
    console.log(id);
    this.editstoryform = this.formBuilder.group({
      id: '',
      title: '',
      desc: '',
      sortorder: '',
      img1: [''],
      img2: [''],
      img3: [''],
    });
    this.adminService.onehappystory(id).subscribe(
      (response: any) => {
        console.log(response);
        this.editstory = true;
        this.editstoryform.setValue({
          id: response.data?._id ? response.data?._id : null,
          title: response.data?.title ? response.data?.title : null,
          desc: response.data?.desc ? response.data?.desc : null,
          sortorder: response.data?.sortorder ? response.data?.sortorder : null,
          img1: [response.data?.img1 ? response.data?.img1 : null],
          img2: [response.data?.img2 ? response.data?.img2 : null],
          img3: [response.data?.img3 ? response.data?.img3 : null],
        });
        this.editimg1 = response.data.img1;
        this.editimg2 = response.data.img2;
        this.editimg3 = response.data.img3;
        console.log(this.editstoryform.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  canceleditstoryform() {
    this.editstoryform.reset();
    this.editstory = false;
  }

  deletestory(id) {
    console.log(id);
    this.adminService.deletehappystory(id).subscribe(
      (response: any) => {
        console.log(response);
        // this.allstory = response.data;
        this.toastr.info('Happy Story deleted successfully');
        this.getallhappystories();
      },
      (error) => {
        console.log(error);
      }
    );
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

  imageeditPreview1(e) {
    const file = e.target.files[0];
    if (file) {
      this.editstoryform.get('img1').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.fileeditPath1 = reader.result;
    };
  }

  imageeditPreview2(e) {
    const file = e.target.files[0];
    if (file) {
      this.editstoryform.get('img2').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.fileeditPath2 = reader.result;
    };
  }

  imageeditPreview3(e) {
    const file = e.target.files[0];
    if (file) {
      this.editstoryform.get('img3').setValue(file);
    }
    const reader = new FileReader();
    const k = reader.readAsDataURL(file);
    this.tosendpath = e.target.files.item(0);
    reader.onload = (_event) => {
      this.fileeditPath3 = reader.result;
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
    this.storyform.reset();
    this.addstory = false;
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

  updatestory() {
    console.log(this.editstoryform.value.id);
    console.log(this.editstoryform.value);
    this.adminService
      .updatehappystory(this.editstoryform.value.id, this.editstoryform.value)
      .subscribe(
        (response: any) => {
          this.getallhappystories();
          this.toastr.success('Story updated succesfully');
          this.editstoryform.reset();
          this.editstory = false;
        },
        (error) => {
          this.toastr.error('Error Occured');
          console.log(error);
        }
      );
  }
}
