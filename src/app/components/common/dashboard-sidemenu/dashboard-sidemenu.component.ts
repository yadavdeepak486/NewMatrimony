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
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getlogo();
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
}
