import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-dashboard-sidemenu',
  templateUrl: './dashboard-sidemenu.component.html',
  styleUrls: ['./dashboard-sidemenu.component.scss'],
})
export class DashboardSidemenuComponent implements OnInit {
  logo: any;
  stndpath = 'assets/img/black-logo.png';
  filepath: any;
  mypermissons: any;
  usertoverify:Number=0;
  alluserscount:Number=0;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getlogo();
    this.getstaffdetail();
    this.getallusers();
    this.getuserstoverify();
  }

  getlogo() {
    this.adminService.getlogo().subscribe(
      (response: any) => {
        this.logo = response.data;
        console.log(this.logo);
        console.log(this.logo.logo);
        this.filepath = this.logo.logo;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getstaffdetail() {
    this.adminService.staffdetail().subscribe(
      (response: any) => {
        console.log(response);
        this.mypermissons = response.data.role;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getallusers() {
    this.adminService.allmemcount().subscribe(
      (response: any) => {
        console.log(response);
        this.alluserscount = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getuserstoverify() {
    this.adminService.allverifyusers().subscribe(
      (response: any) => {
        console.log(response);
        this.usertoverify = response.data.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
