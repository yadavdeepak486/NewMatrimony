import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-subcaste',
  templateUrl: './subcaste.component.html',
  styleUrls: ['./subcaste.component.scss']
})
export class SubcasteComponent implements OnInit {
  allreligion: any
  constructor(public adminService: AdminService) { }

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
      console.log(response)
      this.allreligion = response.data
    }, (error) => {
      console.log(error)
    })
  }


}
