import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent implements OnInit {
  @Input() index: number;
  // Recieves array from parent
  @Input() card: {
    title: string,
    content: string,
    image: string
  };
  constructor() { }

  ngOnInit() {
  }

  checkIfMobile() {
    return (window.screen.availWidth <= 420) ? true : false;
  }
}
