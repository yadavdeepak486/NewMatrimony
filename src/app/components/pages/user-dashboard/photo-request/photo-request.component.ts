import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-photo-request',
  templateUrl: './photo-request.component.html',
  styleUrls: ['./photo-request.component.scss'],
})
export class PhotoRequestComponent implements OnInit {
  users: any;
  constructor(public userService: UserService, private router: Router, public toastr:ToastrService) {}

  ngOnInit(): void {
    this.getallUsers();
  }

  
  getallUsers() {
    this.userService.mysentphotoreq().subscribe(
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

  rejectphotoreq(id){
    this.userService.rejectphotoreq(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info("photo request removed ")
        this.getallUsers()
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
