import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-primium-package',
  templateUrl: './primium-package.component.html',
  styleUrls: ['./primium-package.component.scss'],
})
export class PrimiumPackageComponent implements OnInit {
  plans: any;
  toggleeditplan: boolean = true;
  addplantab = false;
  constructor(
    private adminService: AdminService,
    public toastr: ToastrService,
    private router: Router
  ) {}

  addplan = new FormGroup({
    plantitle: new FormControl(''), //m
    plankey: new FormControl(''), //m
    profile_displayed_other: new FormControl(''), //b
    profile_updation: new FormControl(''), //b
    send_interest: new FormControl(''), //number -1
    receive_interest: new FormControl(''), //number -1
    num_chat_init: new FormControl(''), //num
    num_view_contacts_details: new FormControl(''), //num
    profile_shortlisting: new FormControl(''), //b
    profile_booster: new FormControl(''), //b
    comp_married_switched_num: new FormControl(''), //b
    relationship_manager: new FormControl(''), //b
    talk_on_behalf: new FormControl(''), //b
    plan_validity: new FormControl(''), //number
    website_rate: new FormControl(''), //number
    app_rate: new FormControl(''), //number
    ios_rate: new FormControl(''), //number
    sortorder: new FormControl(''), //number
  });

  editplan = new FormGroup({
    id: new FormControl(''), //m
    plantitle: new FormControl(''), //m
    plankey: new FormControl(''), //m
    profile_displayed_other: new FormControl(''), //b
    profile_updation: new FormControl(''), //b
    send_interest: new FormControl(''), //number -1
    receive_interest: new FormControl(''), //number -1
    num_chat_init: new FormControl(''), //num
    num_view_contacts_details: new FormControl(''), //num
    profile_shortlisting: new FormControl(''), //b
    profile_booster: new FormControl(''), //b
    comp_married_switched_num: new FormControl(''), //b
    relationship_manager: new FormControl(''), //b
    talk_on_behalf: new FormControl(''), //b
    plan_validity: new FormControl(''), //number
    website_rate: new FormControl(''), //number
    app_rate: new FormControl(''), //number
    ios_rate: new FormControl(''), //number
    sortorder: new FormControl(''), //number
  });

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
    this.router.navigate(['add-new-package', id]);
  }

  submitplan() {
    console.log('Implementing');
    console.log(this.addplan.value);
    this.adminService.addplan(this.addplan.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Plan added successfully');
        this.addplan.reset();
        //this.routes.navigate(['/premium-package']);
        this.addplantab = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteplan(id) {
    console.log(id);
  }

  addandedit() {
    this.addplantab = true;
    console.log('add and edit button');
  }

  hideaddplantab() {
    console.log('hide tab button');
    this.addplantab = false;
  }

  editplanchk() {
    console.log('button clicked');
    if (this.toggleeditplan == false) {
      this.toggleeditplan = true;
    } else {
      this.toggleeditplan = false;
    }
  }
}
