import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.scss'],
})
export class AllStaffComponent implements OnInit {
  allstaff: any;
  toggleeditstaff: boolean=true;
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallstaff();
  }
  breadcrumb = [
    {
      title: 'All Staffs',
      subTitle: 'Staffs',
    },
  ];

  getallstaff() {
    this.adminService.getallstaff().subscribe(
      (response: any) => {
        this.allstaff = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getonestaff() {
    this.toastr.info('Page under construction');
  }

  deletestaff(id) {
    //console.log(id);
    this.adminService.deletestaff(id).subscribe(
      (response: any) => {
        //console.log(response)
        this.toastr.info('Staff deleted succesfully');
        this.getallstaff();
      },
      (error) => {
        this.toastr.error('Error occured');
        console.log(error);
      }
    );
  }

  editstaffchk() {
    console.log('button clicked');
    if (this.toggleeditstaff == false) {
      this.toggleeditstaff = true;
    } else {
      this.toggleeditstaff = false;
    }
  }
}
