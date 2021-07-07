import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-blog',
    templateUrl: './homeone-blog.component.html',
    styleUrls: ['./homeone-blog.component.scss']
})
export class HomeoneBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleBlogPost = [
        {
            mainImg: 'assets/img/blog/blog1.jpg',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            date: 'Aug 7, 2020',
            title: 'Lorem Ipsum',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog2.jpg',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            date: 'Aug 6, 2020',
            title: 'Lorem Ipsum',
            link: 'blog-details'
        }
    ]
    singleEventsItem = [
        {
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            title: 'Lorem Ipsum',
            link: 'single-events'
        },
        {
            date: 'Thu, Jul 29, 11:30 am - 10:00 pm',
            title: 'Lorem Ipsum',
            link: 'single-events'
        },
        {
            date: 'Thu, Jul 28, 11:30 am - 10:00 pm',
            title: 'Lorem Ipsum',
            link: 'single-events'
        }
    ]

}