import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor() {
  }
  breadcrumb = [
    {
      title: 'Add Comment',
      subTitle: 'Follwed Up'
    }
  ];

  ngOnInit(): void {
  }
}
