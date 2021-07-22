import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  allcountry:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallcountry();
  }
  breadcrumb = [
    {
      title: 'Country',
      subTitle: 'Categories'
    }
  ]

  getallcountry(){
    this.adminService.allcountry().subscribe((response: any)=>{
      console.log(response)
      this.allcountry = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
