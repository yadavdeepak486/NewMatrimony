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
    profile_displayed_other: new FormControl(false), //b
    profile_updation: new FormControl(false), //b
    send_interest: new FormControl(''), //number -1
    receive_interest: new FormControl(''), //number -1
    num_chat_init: new FormControl(''), //num
    num_view_contacts_details: new FormControl(''), //num
    profile_shortlisting: new FormControl(false), //b
    profile_booster: new FormControl(false), //b
    comp_married_switched_num: new FormControl(false), //b
    relationship_manager: new FormControl(false), //b
    talk_on_behalf: new FormControl(false), //b
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
    profile_displayed_other: new FormControl(false), //b
    profile_updation: new FormControl(false), //b
    send_interest: new FormControl(''), //number -1
    receive_interest: new FormControl(''), //number -1
    num_chat_init: new FormControl(''), //num
    num_view_contacts_details: new FormControl(''), //num
    profile_shortlisting: new FormControl(false), //b
    profile_booster: new FormControl(false), //b
    comp_married_switched_num: new FormControl(false), //b
    relationship_manager: new FormControl(false), //b
    talk_on_behalf: new FormControl(false), //b
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
    console.log(this.addplan.value);
    this.adminService.addplan(this.addplan.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Plan added successfully');
        this.addplan.reset();
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
    this.toggleeditplan = true;
  }

  editplanchk(id) {
    console.log('button clicked');
    console.log(id);
    if (this.toggleeditplan == false) {
      this.toggleeditplan = true;
    } else {
      this.toggleeditplan = false;
    }

    this.adminService.getoneplan(id).subscribe(
      (response: any) => {
        console.log(response);
        this.editplan.setValue({
          id: response.data._id ? response.data._id : null,
          plantitle: response.data.plantitle ? response.data.plantitle : null,
          plankey: response.data.plankey ? response.data.plankey : null,
          profile_displayed_other: response.data.profile_displayed_other
            ? response.data.profile_displayed_other
            : false,
          profile_updation: response.data.profile_updation
            ? response.data.profile_updation
            : false,
          send_interest: response.data.send_interest
            ? response.data.send_interest
            : null,
          receive_interest: response.data.receive_interest
            ? response.data.receive_interest
            : null,
          num_chat_init: response.data.num_chat_init
            ? response.data.num_chat_init
            : null,
          num_view_contacts_details: response.data.num_view_contacts_details
            ? response.data.num_view_contacts_details
            : null,
          profile_shortlisting: response.data.profile_shortlisting
            ? response.data.profile_shortlisting
            : false,
          profile_booster: response.data.profile_booster
            ? response.data.profile_booster
            : false,
          comp_married_switched_num: response.data.comp_married_switched_num
            ? response.data.comp_married_switched_num
            : false,
          relationship_manager: response.data.relationship_manager
            ? response.data.relationship_manager
            : false,
          talk_on_behalf: response.data.talk_on_behalf
            ? response.data.talk_on_behalf
            : false,
          plan_validity: response.data.plan_validity
            ? response.data.plan_validity
            : null,
          website_rate: response.data.website_rate
            ? response.data.website_rate
            : null,
          app_rate: response.data.app_rate ? response.data.app_rate : null,
          ios_rate: response.data.ios_rate ? response.data.ios_rate : null,
          sortorder: response.data.sortorder ? response.data.sortorder : null,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateplan() {
    console.log(this.editplan.value);
    this.adminService
      .editplan(this.editplan.value.id, this.editplan.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success('Plan updated successfully');
          this.editplan.reset();
          this.toggleeditplan = true;
          this.allplans();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
