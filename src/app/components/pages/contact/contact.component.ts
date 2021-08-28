import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    contactInfoBox = [
        {
            icon: 'bx bx-map',
            title: 'Our Address',
            info: [
                {
                    text: 'Nagrota Bagwan Kangra, Himachal Pradesh'
                }
            ]
        },
        {
            icon: 'bx bx-phone-call',
            title: 'Email Us',
            info: [
                {
                    text: '9459143712'
                },
                {
                    text: 'care@himachalirishta.com'
                }
            ]
        },
        {
            icon: 'bx bx-time-five',
            title: 'Hours of Operation',
            info: [
                {
                    text: 'Monday - Friday: 09:00 - 20:00'
                },
                {
                    text: 'Sunday & Saturday: 10:30 - 22:00'
                }
            ]
        }
    ]

    sectionTitle = [
        {
            title: 'Ready to Get Started?',
            paragraph: 'Your email address will not be published. Required fields are marked *'
        }
    ]

    contactImage = [
        {
            img: 'assets/img/contact.png'
        }
    ]

    submit(form){
        var name = form.name;
        console.log(name);
        
        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);
        
        var message = form.message;
        console.log(message);
    }

}