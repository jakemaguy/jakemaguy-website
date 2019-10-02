import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  posts: Array<any>;
  closeResult: string;

  constructor(
    public firebase: FirebaseService) { }

  ngOnInit() {
  }
}

