import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  allusers: any;
  freeusers: any;
  premiumusers: any;
  blockedusers: any


  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.getallusers();
    this.getfreeusers();
    this.getpremiumusers();
    this.getblockedusers();
  }

  getallusers() {
    this.adminService.getalluser().subscribe((response: any) => {
      console.log(response)
      this.allusers = response.data.length
    }, (error) => {
      console.log(error)
    })
  }


  getfreeusers() {
    this.adminService.getfreeusers().subscribe((response: any) => {
      console.log(response)
      this.freeusers = response.data.length
    }, (error) => {
      console.log(error)
    })
  }

  getpremiumusers() {
    this.adminService.getpremiumusers().subscribe((response: any) => {
      console.log(response)
      this.premiumusers = response.data.length
    }, (error) => {
      console.log(error)
    })
  }


  getblockedusers() {
    this.adminService.getblockedusers().subscribe((response: any) => {
      console.log(response)
      this.blockedusers = response.data.length
    }, (error) => {
      console.log(error)
    })
  }
}
