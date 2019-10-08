import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
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
    return this.blogCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as BlogPost;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getPost(id: string): Observable<BlogPost> {
    return this.db.doc<BlogPost>(`blog_posts/${id}`).valueChanges();
  }
}
