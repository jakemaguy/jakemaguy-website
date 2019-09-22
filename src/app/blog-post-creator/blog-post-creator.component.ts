import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BlogPost } from '../blog-page/blog-post';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-post-creator-modal',
  templateUrl: './blog-post-creator.component.html',
  styleUrls: ['./blog-post-creator.component.css']
})
export class BlogPostCreatorComponent implements OnInit {
  closeResult: string;

  createPost(title: string, date: string, logoURL: string) {
    if (title === '' || date === '' || logoURL === '') {
      return null;
    } else {
      return new BlogPost(title, date, logoURL);
    }
  }

  constructor(
    // public dialogRef: MatDialogRef<BlogPostCreatorComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: BlogPost,
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
