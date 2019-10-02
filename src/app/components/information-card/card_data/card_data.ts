import { Output, Component, Input } from '@angular/core';
import { InformationCardComponent } from '../information-card.component';
import { EventEmitter } from 'events';

@Component({
    selector: 'app-card-info',
    template: `<app-information-card
    *ngFor="let card of inputcardData; index as i"
    [card]="card"
    [index]="i">
    </app-information-card>`
})

export class CardDataComponent {
    // tslint:disable-next-line: no-input-rename
    inputcardData = [{
        title: 'Proficient With Angular',
        content: ` I took the time to dive straight into the deep end of angular.  I purchased
        a Udemy course which went over all the necessary components of Angular.
        I undestand the paradigms behind the angular framework, and apply them to my work. 
        Also this website was created using angular.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
    },
    {
        title: 'Proficient With Angular',
        content: ` I took the time to dive straight into the deep end of angular.  I purchased
        a Udemy course which went over all the necessary components of Angular.
        I undestand the paradigms behind the angular framework, and apply them to my work. 
        Also this website was created using angular.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
    }
    ];

    constructor() {
    }
}
