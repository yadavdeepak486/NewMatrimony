import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-my-followup',
  templateUrl: './my-followup.component.html',
  styleUrls: ['./my-followup.component.scss']
})
export class MyFollowupComponent implements OnInit {
  allstaff: any;
  allmyfollowup: any;
  totalfollowupnumber: Number=0;

  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getallstaff();
    this.getmyallfollowup();
  }
  breadcrumb = [
    {
        title: 'My Follow',
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

getmyallfollowup() {
  this.adminService.staffmyfollowup().subscribe(
    (response: any) => {
      console.log(response);
      this.allmyfollowup = response.data;
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
      this.getmyallfollowup()
    },
    (error) => {
      console.log(error);
    }
  );
}


}
