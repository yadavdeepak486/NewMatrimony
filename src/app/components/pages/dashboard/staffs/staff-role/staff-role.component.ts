import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-role',
  templateUrl: './staff-role.component.html',
  styleUrls: ['./staff-role.component.scss']
})
export class StaffRoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Staffs Role',
        subTitle: 'Staffs'
    }
]
}
