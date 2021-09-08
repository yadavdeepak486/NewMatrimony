import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-interest-recieved',
  templateUrl: './interest-recieved.component.html',
  styleUrls: ['./interest-recieved.component.scss'],
})
export class InterestRecievedComponent implements OnInit {
  users: any;
  constructor(public userService: UserService, private router: Router,public toastr: ToastrService) {}

  ngOnInit(): void {
    this.getallUsers();
  }

  pageTitleContent = [
    {
      title: 'Find Popular Places',
    },
  ];


  verticalListings: number = 1;

  getallUsers() {
    this.userService.receivedinterest().subscribe(
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

  acceptinterest(id){
    this.userService.acceptinterest(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success("Interest accepted now you can chat")
        this.getallUsers()
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rejectinterest(id){
    this.userService.rejectinterest(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.info("Interest rejected")
        this.getallUsers()
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
