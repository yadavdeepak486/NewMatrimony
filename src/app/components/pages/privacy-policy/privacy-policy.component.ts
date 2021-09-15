import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
data:any;
  constructor(
    public userService: UserService,
    public adminService: AdminService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getprivacypolicy();
  }

  getprivacypolicy() {
    const id = 'privacy-policy';
    console.log(id);
    this.adminService.getonepagebypath(id).subscribe(
      (response: any) => {
        console.log(response);
        this.data = response.data.html;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


