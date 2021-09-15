import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-termsandcondition-two',
  templateUrl: './termsandcondition-two.component.html',
  styleUrls: ['./termsandcondition-two.component.scss']
})
export class TermsandconditionTwoComponent implements OnInit {
  data:any;
  constructor(
    public userService: UserService,
    public adminService: AdminService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.gettermsandconditionstwo();
  }
  gettermsandconditionstwo() {
    const id = 'terms&condition-two';
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
