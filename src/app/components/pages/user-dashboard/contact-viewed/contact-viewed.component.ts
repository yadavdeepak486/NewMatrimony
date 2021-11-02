import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-viewed',
  templateUrl: './contact-viewed.component.html',
  styleUrls: ['./contact-viewed.component.scss']
})
export class ContactViewedComponent implements OnInit {
  users: any;

  constructor(
    public userService: UserService,
    private router: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getallUsers();
  }

  getallUsers() {
    this.userService.myviewedaddress().subscribe(
      (response: any) => {
        console.log(response);
        this.users = response.data;
        //console.log(this.users[0].Age);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  userDetails(id: number) {
    this.router.navigate(['profile-detail', id]);
  }
}
