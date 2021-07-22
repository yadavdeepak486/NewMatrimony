import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  allcity:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallcity();
  }
  breadcrumb = [
    {
      title: 'City',
      subTitle: 'Categories'
    }
  ]
  getallcity(){
    this.adminService.allcity().subscribe((response: any)=>{
      console.log(response)
      this.allcity = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
