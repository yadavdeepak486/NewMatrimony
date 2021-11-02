import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-demo-one',
  templateUrl: './home-demo-one.component.html',
  styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent implements OnInit {

  checkauth = false;

  constructor() { }

  ngOnInit(): void {
    let auth = localStorage.getItem('auth-token');
    if (auth) {
      this.checkauth = true;
      console.log(this.checkauth);
    }
  }

}
