import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  allstar:any
  constructor(public adminService: AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallstar();
  }
  breadcrumb = [
    {
      title: 'Star',
      subTitle: 'Categories'
    }
  ]
  getallstar(){
    this.adminService.allstar().subscribe((response: any)=>{
      console.log(response)
      this.allstar = response.data
    },(error)=>{
      console.log(error)
    })
  }
}
