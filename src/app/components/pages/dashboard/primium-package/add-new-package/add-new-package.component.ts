import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-add-new-package',
  templateUrl: './add-new-package.component.html',
  styleUrls: ['./add-new-package.component.scss'],
})
export class AddNewPackageComponent implements OnInit {
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
  constructor(
    private adminService: AdminService,
    public toastr: ToastrService,
    public routes: Router
  ) {}

  ngOnInit(): void {}
  breadcrumb = [
    {
      title: 'Add New Package',
      subTitle: 'Premium member',
    },
  ];

  submitplan() {
    console.log('Implementing');
    console.log(this.addplan.value);
    this.adminService.addplan(this.addplan.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Plan added successfully');
        this.addplan.reset();
        this.routes.navigate(['/premium-package']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
}
