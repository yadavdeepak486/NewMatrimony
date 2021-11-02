import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})
export class FollowupComponent implements OnInit {
  allstaff: any;
  allfollowup: any;
  totalfollowupnumber: Number=0;

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getallstaff();
    this.getallfollowup();
  }
  breadcrumb = [
    {
        title: 'Follow UP',
        subTitle: 'Dashboard'
    }
]

getallstaff() {
  this.adminService.getallstaff().subscribe(
    (response: any) => {
      this.allstaff = response.data;
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}

getallfollowup() {
  this.adminService.allfollowup().subscribe(
    (response: any) => {
      console.log(response);
      this.allfollowup = response.data;
      this.totalfollowupnumber = response.data.length;
    },
    (error) => {
      console.log(error);
    }
  );
}

editfollowup(id){
  console.log(id);
}

deletefollowup(id){
  console.log(id);
  this.adminService.deletefollowup(id).subscribe(
    (response: any) => {
      console.log(response);
      this.getallfollowup()
    },
    (error) => {
      console.log(error);
    }
  );
}


getonestafffollowup(e) {
  console.log(e.value);
  this.adminService.stafffollowup(e.value).subscribe(
    (response: any) => {
      console.log(response);
      this.allfollowup = response.data;
    },
    (error) => {
      console.log(error);
    }
  );
}



}
