import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface BlogPost {
  title: string;
  date: string;
  content: string;
  titleimage: string;
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogPosts: Observable<any[]>;

  posts: Array<any>;
  closeResult: string;

  constructor(db: AngularFirestore) {
    this.blogPosts = db.collection('blog_posts').valueChanges();
    console.log(this.blogPosts);
  }

  ngOnInit() {
  }
}

