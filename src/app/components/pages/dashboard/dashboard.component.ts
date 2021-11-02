import { AdminService } from 'src/app/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    adminname:any

    constructor(private adminService: AdminService) { }

    ngOnInit(): void {
      this.getstaffdetail()
    }
    breadcrumb = [
      {
          title: 'Howdy, Andy!',
          subTitle: 'Dashboard'
      }
  ]


    getstaffdetail() {
      this.adminService.staffdetail().subscribe(
        (response: any) => {
          console.log(response);
          this.adminname = response.data.firstname;
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
