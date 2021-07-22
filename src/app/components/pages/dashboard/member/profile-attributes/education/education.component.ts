import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  alleducation:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getalleducation();
  }
  breadcrumb = [
    {
      title: 'Education',
      subTitle: 'Categories'
    }
  ]
  getalleducation(){
    this.adminService.alleducation().subscribe((response: any)=>{
      console.log(response)
      this.alleducation = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
