import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post'
import { BlogPostCreatorComponent } from '../blog-post-creator/blog-post-creator.component'
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../firebase.service'

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  posts: Array<any>;

  constructor(public dialog: MatDialog,
    public firebase: FirebaseService) { }

  ngOnInit() { 
    this.firebase.getPosts()
    .subscribe(result => {
      this.posts = result;
      console.log(result)
    })
  }

  openDialog() {
    let dialogRef = this.dialog.open(BlogPostCreatorComponent, {
      height: '1000px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null){
        this.addPost(result);
      }
    });
  }

  addPost(post: BlogPost) {
    this.posts.push(post);
    this.firebase.addPost(post);
  }
}
