import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  content: any = '';
  data: any;
  blured = false;
  focused = false;
  constructor() { }


  ngOnInit(): void {
  }


  breadcrumb = [
    {
        title: 'Send Sms',
        subTitle: 'Members'
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
