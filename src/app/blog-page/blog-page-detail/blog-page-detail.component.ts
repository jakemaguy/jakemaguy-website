import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-page-detail',
  templateUrl: './blog-page-detail.component.html',
  styleUrls: ['./blog-page-detail.component.css']
})
export class BlogPageDetailComponent implements OnInit {
  blogPost: Observable<BlogPost>;

  constructor() { }

  ngOnInit() {
  }

}
