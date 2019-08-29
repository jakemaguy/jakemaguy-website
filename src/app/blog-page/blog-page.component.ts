import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post'

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  posts: BlogPost[] =[
    {
      title: 'Learning Angular',
      date: '08/28/2019',
      logoURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    },
    {
      title: 'Learning React',
      date: '08/21/2019',
      logoURL: 'https://banner2.kisspng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg', 
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
