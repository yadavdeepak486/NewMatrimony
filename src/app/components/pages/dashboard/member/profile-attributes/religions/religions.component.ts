import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-religions',
  templateUrl: './religions.component.html',
  styleUrls: ['./religions.component.scss']
})
export class ReligionsComponent implements OnInit {

  allreligion: any
  selectedreligion: any
  religion = new FormGroup({
    sortorder: new FormControl(''),
    name: new FormControl('')
  });

  editreligion = new FormGroup({
    id: new FormControl(''),
    sortorder: new FormControl(''),
    name: new FormControl('')
  });


  constructor(public adminService: AdminService,) {
  }

  ngOnInit(): void {
    this.getallreligion();
  }
  breadcrumb = [
    {
      title: 'Religions',
      subTitle: 'Members'
    }
  ]

  getallreligion() {
    this.adminService.getallreligion().subscribe((response: any) => {
      // console.log(response)
      this.allreligion = response.data
    }, (error) => {
      console.log(error)
    })
  }

  getonereligion(id) {
    this.adminService.getonereligion(id).subscribe((response: any) => {
      console.log(id)
      console.log(response)
      this.selectedreligion = response.data
      this.editreligion.setValue({ sortorder: response.data.sortorder, name: response.data.name, id: response.data._id })
    }, (error) => {
      console.log(error)
    })
  }

  updatereligion() {
    console.log(this.editreligion.value, this.editreligion.value.id)
    this.adminService.editreligion(this.editreligion.value.id, this.editreligion.value).subscribe((response: any) => {
      // console.log(id)
      this.getallreligion();
    }, (error) => {
      console.log(error)
    })

  }

  submitForm() {
    console.log(this.religion.value);
    this.adminService.addreligion(this.religion.value).subscribe((response: any) => {
      console.log(response)
      this.getallreligion();
    }, (error) => {
      console.log(error)
    })
  }

  deletereligion(id) {
    console.log(id)
    this.adminService.deleterelgion(id).subscribe((response: any) => {
      console.log(response)
      this.getallreligion();
    }, (error) => {
      console.log(error)
    })
  }

}
