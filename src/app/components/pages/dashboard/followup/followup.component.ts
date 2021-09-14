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
  // users = new FormControl();
  // usersList: string[] = ['Rahul', 'Mohit', 'Mukesh', 'lorem', ];
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getallstaff();
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
}
