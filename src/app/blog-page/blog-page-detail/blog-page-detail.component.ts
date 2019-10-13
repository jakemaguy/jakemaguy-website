import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { FirebaseFetchService } from '../../firebase-fetch.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog-page-detail',
  templateUrl: './blog-page-detail.component.html',
  styleUrls: ['./blog-page-detail.component.css']
})
export class BlogPageDetailComponent implements OnInit {
  downloadURL: Observable<string>;
  blogPost: BlogPost;
  id: string;

  constructor(
    private dbFetch: FirebaseFetchService,
    private route: ActivatedRoute,
    private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dbFetch.getPost(params.get('id')))
    ).subscribe(object => {
      object.subscribe(e => {
        this.blogPost = new BlogPost(
          e.id, e.title, e.date, e.content, e.logoURL
        );
        const ref = this.storage.ref(`markdown_files/${this.blogPost.id}.md`);
        this.downloadURL = ref.getDownloadURL();
      });
    });
  }
}
