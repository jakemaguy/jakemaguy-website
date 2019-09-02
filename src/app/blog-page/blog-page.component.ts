import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post'
import { BlogPostCreatorComponent } from '../blog-post-creator/blog-post-creator.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  posts: BlogPost[] =[
    {
      title: 'Learning Angular',
      date: '08/28/2019',
      logoURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    },
    {
      title: 'Learning React',
      date: '08/21/2019',
      logoURL: 'https://banner2.kisspng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg', 
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog() {
    console.log("test")
    let dialogRef = this.dialog.open(BlogPostCreatorComponent, {
      height: '1000px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addPost(result);
    });
  }

  addPost(post: BlogPost) {
    this.posts.push(post);
  }
}
