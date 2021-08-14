import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-primium-package',
  templateUrl: './primium-package.component.html',
  styleUrls: ['./primium-package.component.scss'],
})
export class PrimiumPackageComponent implements OnInit {
  plans: any;

  constructor(
    private adminService: AdminService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.allplans();
  }
  breadcrumb = [
    {
      title: 'Premium Package',
      subTitle: 'Dashboard',
    },
  ];

  allplans() {
    this.adminService.allplans().subscribe(
      (response: any) => {
        console.log(response);
        this.plans = response.data;
      },
      (error) => {
        this.toastr.error('No Plans');
      }
    );
  }

  getoneplan(id) {
    console.log(id);
  }

  deleteplan(id) {
    console.log(id);
  }
}
