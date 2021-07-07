import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-profile',
  templateUrl: './similar-profile.component.html',
  styleUrls: ['./similar-profile.component.scss']
})
export class SimilarProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
