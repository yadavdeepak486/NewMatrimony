import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})
export class FollowupComponent implements OnInit {
  users = new FormControl();
  usersList: string[] = ['Rahul', 'Mohit', 'Mukesh', 'lorem', ];
  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Follow UP',
        subTitle: 'Dashboard'
    }
]
}
