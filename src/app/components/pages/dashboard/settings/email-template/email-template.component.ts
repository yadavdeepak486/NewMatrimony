import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {
  content: any = '';
  data: any;

  blured = false;
  focused = false;
  constructor() { }
  ngOnInit(): void {
    
  }
  breadcrumb = [
    {
        title: 'Email-Template',
        subTitle: 'Setting'
    }
]

created(event) {
  // tslint:disable-next-line:no-console
  console.log('editor-created', event);
}

changedEditor(event: EditorChangeContent) {
  // tslint:disable-next-line:no-console
  console.log('editor-change', event);
  console.log('editor-change', event?.html);
  this.data = event?.html;
}

focus($event) {
  // tslint:disable-next-line:no-console
  console.log('focus', $event);
  this.focused = true;
  this.blured = false;
}

blur($event) {
  // tslint:disable-next-line:no-console
  console.log('blur', $event);
  this.focused = false;
  this.blured = true;
}

getValue(event: Event): string {
  return (event.target as HTMLInputElement).value;
}
}
