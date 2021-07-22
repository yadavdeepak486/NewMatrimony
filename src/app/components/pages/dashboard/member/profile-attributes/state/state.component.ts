import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  allstate:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallstate();
  }
  breadcrumb = [
    {
      title: 'State',
      subTitle: 'Categories'
    }
  ]

  getallstate(){
    this.adminService.allstate().subscribe((response: any)=>{
      console.log(response)
      this.allstate = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
