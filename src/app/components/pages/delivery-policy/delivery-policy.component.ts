import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-delivery-policy',
  templateUrl: './delivery-policy.component.html',
  styleUrls: ['./delivery-policy.component.scss']
})
export class DeliveryPolicyComponent implements OnInit {
  data:any;
  constructor(
    public userService: UserService,
    public adminService: AdminService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getdeliverypolicy();
  }
  getdeliverypolicy() {
    const id = 'delivery-policy';
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
