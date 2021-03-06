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

  async getPosts() {
    this.blogCollection = this.db.collection<BlogPost>('blog_posts');
    return this.blogCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  async getPost(id: string) {
    return this.db.doc<BlogPost>(`blog_posts/${id}`).snapshotChanges().pipe(
      map(actions => {
      const data = actions.payload.data() as BlogPost;
      const id = actions.payload.id;
      return { id, ...data };
    }));
  }
}
