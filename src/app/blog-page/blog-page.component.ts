import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './blog-post.model';
import { FirebaseFetchService } from '../firebase-fetch.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogPosts: BlogPost[];

  posts: Array<any>;
  closeResult: string;

  constructor(private dbFetch: FirebaseFetchService) {
  }

  ngOnInit() {
    this.dbFetch.getPosts()
      .subscribe((blogPosts: BlogPost[]) => {
        this.blogPosts = blogPosts;
      });
  }
}

