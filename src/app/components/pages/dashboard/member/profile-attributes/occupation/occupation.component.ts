import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent implements OnInit {
  alloccupation:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getalloccupation();
  }
  breadcrumb = [
    {
      title: 'Occupation',
      subTitle: 'Categories'
    }
  ]
  getalloccupation(){
    this.adminService.alloccupation().subscribe((response: any)=>{
      console.log(response)
      this.alloccupation = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
