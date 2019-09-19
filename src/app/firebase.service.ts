import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogPost } from './blog-page/blog-post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore ) { }

  addPost(post: BlogPost) {
    return this.db.collection('blog_post').add({
      title: post.title,
      date: post.date,
      logoURL: post.logoURL,
      content: ''
    })
  }
}
