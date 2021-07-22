import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-family-status',
  templateUrl: './family-status.component.html',
  styleUrls: ['./family-status.component.scss']
})
export class FamilyStatusComponent implements OnInit {
 allfamilystatus:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallfamilystatus();
  }
  breadcrumb = [
    {
      title: 'Family Status',
      subTitle: 'Categories'
    }
  ]
  getallfamilystatus(){
    this.adminService.allfamilystatus().subscribe((response: any)=>{
      console.log(response)
      this.allfamilystatus = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
