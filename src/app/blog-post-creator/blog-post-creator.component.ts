import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BlogPost } from '../blog-page/blog-post'

@Component({
  selector: 'app-blog-post-creator',
  templateUrl: './blog-post-creator.component.html',
  styleUrls: ['./blog-post-creator.component.css']
})
export class BlogPostCreatorComponent implements OnInit {

  createPost(title: string, date: string, logoURL: string) {
    return new BlogPost(title, date, logoURL);
  }

  constructor(
    public dialogRef: MatDialogRef<BlogPostCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogPost) { }

  ngOnInit() {
  }

}
