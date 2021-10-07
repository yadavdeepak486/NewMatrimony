import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit, OnDestroy {
  ngStyle: boolean = false;
  userdetails: any;
  id: any;
  Photodummen = 'assets/img/me.jpg';
  Photodumwomen = 'assets/img/wo.jpg';

  constructor(
    public userService: UserService,
    public toastr: ToastrService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewDetailedProfile(this.id);

  }
  ngOnDestroy(): void {
    this.userdetails = '';
  }

  viewDetailedProfile(id) {
    this.userService.viewoneprofile(id).subscribe(
      (response: any) => {
        console.log(response);
        this.userdetails = response.data;
        this.addviewprofile(id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addviewprofile(id) {
    this.userService.addviewprofile(id).subscribe(
      (response: any) => {
        console.log('profile viewed' + response);
        // this.userdetails = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendinterest(id) {
    console.log(id);
    this.userService.sendinterest(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Interest sent successfully');
      },
      (error) => {
        this.toastr.error('Interest Already sent');
      }
    );
  }

  addtoshortlist(id) {
    console.log(id);
    this.userService.addtoshortlist(id).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Added to sortlist');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  reportauser(id) {
    console.log(id);
    this.userService.reportuser(id).subscribe(
      (response: any) => {
        console.log(response);
        // this.filter();
        this.toastr.success('User Reported');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
