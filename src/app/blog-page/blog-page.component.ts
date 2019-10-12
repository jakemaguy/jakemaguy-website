import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './blog-post.model';
import { FirebaseFetchService } from '../firebase-fetch.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  posts: Array<any>;
  closeResult: string;

  constructor(private dbFetch: FirebaseFetchService) {
  }

  ngOnInit() {
    this.dbFetch.getPosts()
    .then(result => {
      result.subscribe(object => {
        object.forEach(elem => {
          if (elem) {
            this.blogPosts.push(new BlogPost(
              elem.id, elem.title, elem.date,
              elem.content, elem.logoURL));
          }
        });
        this.blogPosts.sort((a: any, b: any) => {
          console.log(a.date.seconds);
          return +new Date(b.date.seconds) - +new Date(a.date.seconds);
        });
      });
    });
  }
}

