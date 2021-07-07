import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Your Wedding Planing Start Here',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
        }
    ]
    singleFeaturesBox = [
        {
            icon: 'flaticon-commerce',
            title: 'Lorem Ipsum',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkText: 'Get Start Now',
            link: 'contact'
        },
        {
            icon: 'flaticon-project',
            title: 'Lorem Ipsum',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkText: 'Get Start Now',
            link: 'contact'
        },
        {
            icon: 'flaticon-growth',
            title: 'Lorem Ipsum',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkText: 'Get Start Now',
            link: 'contact'
        }
    ]

}