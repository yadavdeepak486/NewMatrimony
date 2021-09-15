import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-blocked-profile',
  templateUrl: './blocked-profile.component.html',
  styleUrls: ['./blocked-profile.component.scss'],
})
export class BlockedProfileComponent implements OnInit {
  users: any;

  constructor(
    public userService: UserService,
    private router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallUsers();
  }

  pageTitleContent = [
    {
      title: 'Find Popular Places',
    },
  ];

  getallUsers() {
    this.userService.allblockedusersbyme().subscribe(
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

  unblockprofile(id) {
    this.userService.unblockuser(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info('Unblock');
        this.getallUsers();
        this.getallUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
