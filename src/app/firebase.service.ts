import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogPost } from './blog-page/blog-post';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore ) { }

  getPosts() {
    return this.db.collection('blog_post').snapshotChanges();
  }

  addPost(post: BlogPost) {
    return this.db.collection('blog_post').add({
      title: post.title,
      date: post.date,
      logoURL: post.logoURL,
      content: ''
    })
  }
}
