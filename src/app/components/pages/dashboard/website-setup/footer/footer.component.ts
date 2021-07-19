import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

export interface Phone {
  name: string;
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {


  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  phone: Phone[] = [


  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.phone.push({name: value});
    }

    // Clear the input value

  }

  remove(phone: Phone): void {
    const index = this.phone.indexOf(phone);

    if (index >= 0) {
      this.phone.splice(index, 1);
    }
  }



  constructor() {

  }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Website Footer',
        subTitle: 'Website Setup'
    }
]


}


