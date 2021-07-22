import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-family-value',
  templateUrl: './family-value.component.html',
  styleUrls: ['./family-value.component.scss']
})
export class FamilyValueComponent implements OnInit {
  allfamilyvalues:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallfamilyvalues();
  }
  breadcrumb = [
    {
      title: 'Family Values',
      subTitle: 'Categories'
    }
  ]
  getallfamilyvalues(){
    this.adminService.allfamilyvalues().subscribe((response: any)=>{
      console.log(response)
      this.allfamilyvalues = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
