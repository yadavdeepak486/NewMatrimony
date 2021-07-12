import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-similar-profile',
  templateUrl: './similar-profile.component.html',
  styleUrls: ['./similar-profile.component.scss']
})
export class SimilarProfileComponent implements OnInit {
  similarprofiles: any
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getallUsers();
  }

  sectionTitle = [
    {
      title: 'Upcoming Events',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
    }
  ]
  eventsBox = [
    {
      img: 'assets/img/events/img-1.png',
      title: 'lorem',
      date: 'Thu, Jul 30',
      link: ''
    }
  ]
  singleEventsBox = [
    {
      img: 'assets/img/events/img-2.png',
      title: 'lorem',
      date: 'Thu, Jul 30',
      link: ''
    },
    {
      img: 'assets/img/events/img-3.png',
      title: 'lorem',
      date: 'Thu, Jul 30',
      link: ''
    },
    {
      img: 'assets/img/events/img-4.png',
      title: 'lorem',
      date: 'Thu, Jul 30',
      link: ''
    }
  ]


  getallUsers() {
    this.userService.getallprofiles().subscribe((response: any) => {
      console.log(response)
      this.similarprofiles = response.data
    }, (error) => {
      console.log(error)
    })
  }


}
