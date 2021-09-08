import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-interest-sent',
  templateUrl: './interest-sent.component.html',
  styleUrls: ['./interest-sent.component.scss']
})
export class InterestSentComponent implements OnInit {
  users: any;
  constructor(public userService: UserService, private router: Router,public toastr: ToastrService) {}

  ngOnInit(): void {
    this.getallUsers();
  }

  
  getallUsers() {
    this.userService.sentinterest().subscribe(
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

  unsend(id){
    console.log(id)
    this.userService.rejectinterest(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info("Interest Removed")
        this.getallUsers()
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


