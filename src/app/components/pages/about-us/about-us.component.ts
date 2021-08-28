import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleContent = [
        {
            title: 'About Us',
            backgroundImage: 'assets/img/page-title/page-title1.jpg'
        }
    ]
    aboutContent = [
        {
            title: 'Welcome to Himachali Rishta .com',
            subTitle: 'Check video presentation to find out more about us.',
            paragraph: [
                {
                    text: "Himachali Rishta.com (www.himachalirishta.com) is himachal's first matrimonial website.We help you to search you a better match in all community of Himachal Pradesh,"
                },
                {
                    text: "We Provide Bride and groom searc for the Himachali Community Like,Brahmin,Vaishya, Sood,Choudhary,Ghirath (Girth ), Dogra,Rajput,Kaistha,Gaddi Community etc"
                }
            ]
        }
    ]
    aboutImage = [
        {
            img: 'assets/img/about-img.jpg',
            videoLink: 'https://www.youtube.com/watch?v=bk7McNUjWgw'
        }
    ]

}