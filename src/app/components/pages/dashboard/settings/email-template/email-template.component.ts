import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {
  content: any = '';
  data: any;
  toggleregisedit:boolean= true;
  toggleactivateedit:boolean= true;
  togglepaysuccess:boolean=true;
  togglerequest:boolean= true;
  togglerejectinterst: boolean= true;
  togglenewmatch: boolean= true;
  togglepassword: boolean= true;

  blured = false;
  focused = false;

  paswordtemplateform = new FormGroup({
    subject: new FormControl(''),
    html: new FormControl(''),
  });

  registertemplateform = new FormGroup({
    subject: new FormControl(''),
    html: new FormControl(''),
  });

  memberactivateform = new FormGroup({
    subject: new FormControl(''),
    html: new FormControl(''),
  });
  
  paymentsuccessform = new FormGroup({
    subject: new FormControl(''),
    html: new FormControl(''),
  });

  interestrequestform= new FormGroup ({
    subject: new FormControl(''),
    html: new FormControl(''),
  });

  interestrejectform = new FormGroup({
    subject: new FormControl(''),
    html: new FormControl(''),
  });

  newmatchform= new FormGroup ({
    subject: new FormControl(''),
    html: new FormControl(''),
  });
  
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

registapprved(){
  console.log('button clicked');
    if(this.toggleregisedit == false){
      this.toggleregisedit = true;
    } else{
      this.toggleregisedit = false;
    }
  }

memberactivation(){
    console.log('button clicked');
    if(this.toggleactivateedit == false) {
      this.toggleactivateedit= true;
      } else {
       this.toggleactivateedit= false;
      }
    }

paymentsuccess(){
  console.log('button clicked');
  if(this.togglepaysuccess== false){
    this.togglepaysuccess= true;
  } else{
    this.togglepaysuccess= false;
  }
}

interestrequst(){
  console.log('button clicked');
  if(this.togglerequest== false){
     this.togglerequest= true;
  } else{
    this.togglerequest= false;
  }
}

interestreject(){
  console.log('button clicked');
  if(this.togglerejectinterst == false){
     this.togglerejectinterst = true;
  } else{
     this.togglerejectinterst = false;
  }
}

newmatch(){
  console.log('button clicked');
    if(this.togglenewmatch == false){
       this.togglenewmatch = true;
    } else{
       this.togglenewmatch = false;
    }
}

passreset(){
  console.log('button clicked')
  if(this.togglepassword== false){
     this.togglepassword= true;
  } else{
     this.togglepassword= false;
  }
}

canceladdpageform() {
  this.togglepassword = true;
  this.paswordtemplateform.reset();
}

cancelregisterapproved() {
  this.toggleregisedit = true;
  this.registertemplateform.reset();
}

cancelmemberactivation() {
  this.toggleactivateedit = true;
  this.memberactivateform.reset();
}

cancelpaymentedit() {
  this.togglepaysuccess = true;
  this.paymentsuccessform.reset();
}

cancelinterestrequst() {
  this.togglerequest = true;
  this.interestrequestform.reset();
}

cancelinterestreject() {
  this.togglerejectinterst = true;
  this.interestrejectform.reset();
}

cancelnewmatch() {
  this.togglenewmatch = true;
  this.newmatchform.reset();
}

}
