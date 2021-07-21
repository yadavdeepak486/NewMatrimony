import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-member-language',
  templateUrl: './member-language.component.html',
  styleUrls: ['./member-language.component.scss']
})
export class MemberLanguageComponent implements OnInit {

  editmode: boolean= false
  alllanguage: any
  selectedlanguage:any

  language = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl('')
  });

  editlanguage = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl('')
  });

  constructor(public adminService: AdminService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getalllanguage();
  }
  breadcrumb = [
    {
      title: 'Member Language',
      subTitle: 'Categories'
    }
  ]

  getalllanguage() {
    this.adminService.getalllanguage().subscribe((response: any) => {
      // console.log(response)
      this.alllanguage = response.data
    }, (error) => {
      console.log(error)
    })
  }

  getonelanguage(id) {
    this.adminService.getonelanguage(id).subscribe((response: any) => {
      console.log(id)
      console.log(response)
      this.editmode = true
      this.selectedlanguage = response.data
      this.editlanguage.setValue({ sortorder: response.data.sortorder, name: response.data.name, id: response.data._id })
    }, (error) => {
      console.log(error)
    })
  }

  cancelupdate(){
    this.editmode = false
  }

  updatelanguage() {
    console.log(this.editlanguage.value, this.editlanguage.value.id)
    this.adminService.editreligion(this.editlanguage.value.id, this.editlanguage.value).subscribe((response: any) => {
      this.getalllanguage();
      this.toastr.success('Religion updated succesfully');
      this.editlanguage.reset()
      this.editmode = false
    }, (error) => {
      this.toastr.error('Error Occured')
      console.log(error)
    })

  }


  submitForm() {
    console.log(this.language.value);
    this.adminService.addlanguage(this.language.value).subscribe((response: any) => {
      console.log(response)
      this.toastr.success('Language added succesfully');
      this.getalllanguage();
      this.language.reset()
    }, (error) => {
      console.log(error)
    })
  }


  deletelanguage(id) {
    console.log(id)
    this.adminService.deletelanguage(id).subscribe((response: any) => {
      console.log(response)
      this.toastr.info('Language deleted succesfully');
      this.getalllanguage();
    }, (error) => {
      this.toastr.error('Error Occured');
      console.log(error)
    })
  }
}
