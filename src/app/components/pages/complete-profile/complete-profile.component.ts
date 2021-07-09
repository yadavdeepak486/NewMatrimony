import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  religions: any[] = [
    { value: 'Hinduism-0', viewValue: 'Hinduism' },
    { value: 'Islamism-1', viewValue: 'Islamism' },
    { value: 'Buddism-2', viewValue: 'Buddism' }
  ];

  castes: any[] = [
    { value: 'patel-0', viewValue: 'patel' },
    { value: 'yadav-1', viewValue: 'yadav' },
    { value: 'singh-2', viewValue: 'singh' }
  ];

  type_of_occs: any[] = [
    { value: 'Govt-0', viewValue: 'Govt' },
    { value: 'Private-1', viewValue: 'Private' },
    { value: 'Semi-govt-2', viewValue: 'Semi-govt' }
  ];

  living_citys: any[] = [
    { value: 'Indore-0', viewValue: 'Indore' },
    { value: 'Dewas-1', viewValue: 'Dewas' },
    { value: 'Bhopal-2', viewValue: 'Bhopal' }
  ];

  native_places: any[] = [
    { value: 'Indore-0', viewValue: 'Indore' },
    { value: 'Dewas-1', viewValue: 'Dewas' },
    { value: 'Bhopal-2', viewValue: 'Bhopal' }
  ];

  highest_quals: any[] = [
    { value: 'BE-0', viewValue: 'BE' },
    { value: 'BTech-1', viewValue: 'BTech' },
    { value: 'MTech-2', viewValue: 'MTech' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
  }

}
