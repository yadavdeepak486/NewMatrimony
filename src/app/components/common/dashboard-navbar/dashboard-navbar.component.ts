import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss'],
})
export class DashboardNavbarComponent implements OnInit {
  staffdetail: any;
  constructor(public routes: Router, public adminService: AdminService) {}

  ngOnInit(): void {
    this.getstaffdetail();
  }

  logout() {
    console.log('request logout');
    const setauth = false;
    localStorage.removeItem('auth-adtoken');
    this.routes.navigate(['/admin-login']);
  }

  getstaffdetail() {
    this.adminService.staffdetail().subscribe(
      (response: any) => {
        console.log(response);
        this.staffdetail = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
