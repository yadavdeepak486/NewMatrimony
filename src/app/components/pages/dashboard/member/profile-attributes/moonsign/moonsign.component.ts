import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-moonsign',
  templateUrl: './moonsign.component.html',
  styleUrls: ['./moonsign.component.scss']
})
export class MoonsignComponent implements OnInit {
  allmoonsign:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallmoonsign();
  }
  breadcrumb = [
    {
      title: 'Moonsign',
      subTitle: 'Categories'
    }
  ]
  getallmoonsign(){
    this.adminService.allmoonsign().subscribe((response: any)=>{
      console.log(response)
      this.allmoonsign = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
