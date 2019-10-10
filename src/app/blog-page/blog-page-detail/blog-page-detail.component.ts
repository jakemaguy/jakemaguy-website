import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { FirebaseFetchService } from '../../firebase-fetch.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-page-detail',
  templateUrl: './blog-page-detail.component.html',
  styleUrls: ['./blog-page-detail.component.css']
})
export class BlogPageDetailComponent implements OnInit {
  blogPost: BlogPost;
  id: string;

  constructor(
    private dbFetch: FirebaseFetchService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dbFetch.getPost(params.get('id')))
    ).subscribe(object => {
      object.subscribe(e => {
        console.log();
        this.blogPost = new BlogPost(
          e.id, e.title, e.date, e.content, e.logoURL
        );
      });
    });
  }

}
