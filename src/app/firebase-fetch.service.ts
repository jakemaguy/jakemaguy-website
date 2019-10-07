import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BlogPost } from './blog-page/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFetchService {
  blogCollection: AngularFirestoreCollection<BlogPost>;
 // blogPosts: Observable<BlogPost[]>;


  constructor(public db: AngularFirestore) { }

  getPosts(): Observable<BlogPost[]> {
    this.blogCollection = this.db.collection<BlogPost>('blog_posts');
    return this.blogCollection.valueChanges();
  }

  getPost(title: string) {
    return this.getPosts().pipe(
      map((blogPosts: BlogPost[]) => blogPosts.find(
        blogPost => blogPost.title === title))
      );
  }
}
