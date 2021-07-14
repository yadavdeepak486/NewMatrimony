import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-caste',
  templateUrl: './caste.component.html',
  styleUrls: ['./caste.component.scss']
})
export class CasteComponent implements OnInit {
  allcaste: any
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.getallcaste();
  }
  breadcrumb = [
    {
      title: 'Caste',
      subTitle: 'Categories'
    }
  ]

  getallcaste() {
    this.adminService.getallcaste().subscribe((response: any) => {
      console.log(response)
      this.allcaste = response.data
    }, (error) => {
      console.log(error)
    })
  }


}
