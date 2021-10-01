import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  allusers: any;
  freeusers: any;
  premiumusers: any;
  blockedusers: any;

  constructor(public adminService: AdminService) {}

  ngOnInit(): void {
    this.getallusers();
    this.getfreeusers();
    this.getpremiumusers();
    this.getblockedusers();
  }

  getallusers() {
    this.adminService.allmemcount().subscribe(
      (response: any) => {
        console.log(response);
        this.allusers = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getfreeusers() {
    this.adminService.freememcount().subscribe(
      (response: any) => {
        console.log(response);
        this.freeusers = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getpremiumusers() {
    this.adminService.premiummemcount().subscribe(
      (response: any) => {
        console.log(response);
        this.premiumusers = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getblockedusers() {
    this.adminService.blockcount().subscribe(
      (response: any) => {
        console.log(response);
        this.blockedusers = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
