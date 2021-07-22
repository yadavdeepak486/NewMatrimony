import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-employedin',
  templateUrl: './employedin.component.html',
  styleUrls: ['./employedin.component.scss']
})
export class EmployedinComponent implements OnInit {
  allemployedin:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallemployedin();
  }
  breadcrumb = [
    {
      title: 'Employedin',
      subTitle: 'Categories'
    }
  ]
  getallemployedin(){
    this.adminService.allemployedin().subscribe((response: any)=>{
      console.log(response)
      this.allemployedin = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
