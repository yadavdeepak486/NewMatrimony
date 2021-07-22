import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-hight',
  templateUrl: './hight.component.html',
  styleUrls: ['./hight.component.scss']
})
export class HightComponent implements OnInit {
  allheight:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallheight();
  }
  breadcrumb = [
    {
      title: '',
      subTitle: 'Categories'
    }
  ]
  getallheight(){
    this.adminService.getallheight().subscribe((response: any)=>{
      console.log(response)
      this.allheight = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
