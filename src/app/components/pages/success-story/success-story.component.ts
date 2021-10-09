import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-story',
  templateUrl: './success-story.component.html',
  styleUrls: ['./success-story.component.scss']
})
export class SuccessStoryComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

singleProductsBox = [
  {
      img: 'assets/img/products/products-img1.jpg',
      title: 'Rahul & Pooja',
      date: '10 May, 2018',
      city:'indore'
  },
  {
      img: 'assets/img/products/products-img2.jpg',
      title: 'Shreena & Dhanesh',
      date: '10 May, 2018 ',
      city:'indore'
  },
  {
      img: 'assets/img/products/products-img3.jpg',
      title: 'Walter & Elizabeth',
      date: '$200',
      city:'Surat'
  },
  {
      img: 'assets/img/products/products-img4.jpg',
      title: 'Nathan & Donna',
      date: '10 May, 2018',
      city:'Vapi'
  },
  {
      img: 'assets/img/products/products-img5.jpg',
      title: 'Vanessa & Ryan',
      date: '10 May, 2018',
      city:'Surat'
      
  },
 
  {
      img: 'assets/img/products/products-img6.jpg',
      title: 'Walter & Elizabeth',
      date: '10 May, 2018',
      city:'Ahmedabad'
  }
]
}
