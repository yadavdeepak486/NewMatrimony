import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-verify-member',
  templateUrl: './verify-member.component.html',
  styleUrls: ['./verify-member.component.scss']
})
export class VerifyMemberComponent implements OnInit {
  alluser: any;
  loader:boolean= true;


  constructor(public adminServie: AdminService,private dialog: MatDialog,) { }


  ngOnInit(): void {
    this.resetOption = [this.options[0]];
    this.getuserstoverify();

  }

  pageTitleContent = [
    {
        title: 'Find Popular Places'
    }
]

// Category Select
singleSelect: any = [];
multiSelect: any = [];
stringArray: any = [];
objectsArray: any = [];
resetOption: any;
config = {
    displayKey: "name",
    search: true
};
options = [
    // Type here your category name
    {
        name: "name",
    },
    {
        name: "lorem",
    },
    {
        name: "lorem",
    }

];
searchChange($event) {
    console.log($event);
}
reset() {
    this.resetOption = [];
}
// Ordering Select



verticalListings: number = 1;


  breadcrumb = [
    {
      title: 'Verify member List',
      subTitle: 'Members'
    }
  ]

  getuserstoverify() {
    this.adminServie.allverifyusers().subscribe(
      (response: any) => {
        console.log(response);
        this.alluser = response.data;
        this.loader= false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
