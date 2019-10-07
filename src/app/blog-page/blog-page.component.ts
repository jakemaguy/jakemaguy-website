import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogPost } from './blog-post.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogCollection: AngularFirestoreCollection<BlogPost>;
  blogPosts: Observable<BlogPost[]>;

  posts: Array<any>;
  closeResult: string;

  constructor(db: AngularFirestore) {
    this.blogCollection = db.collection<BlogPost>('blog_posts');
    this.blogPosts = this.blogCollection.valueChanges();
  }

  ngOnInit() {
  }
}

