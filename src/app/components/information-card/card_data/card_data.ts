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
        image: 'https://www.stickpng.com/assets/images/5847ea22cef1014c0b5e4833.png'
    },
    {
        title: 'Full Stack Experience',
        content: `As a backend engineer at my current company, I understand what needs to happen
        behind the scenes.  I have experience with NoSQL, Microsoft SQL Server, MySQL, and Oracle databases.`,
        image: 'https://icons-for-free.com/iconfiles/png/512/file+sql+icon-1320183612970878250.png'
    },
    {
        title: 'Languages',
        content: `I have experience with object oriented languages such as Typescript, Python, C#,
        and C++.  I am also open to learning new languages.  Not knowing a language has never stopped me before.`,
        image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
    },
    {
        title: 'Come out of your shell',
        content: `As a backend engineer, I am profficient in various linux sysadmin tasks.  At my current company, I have
        written numerous bash functions and scripts to automate repetive tasks.  It's always good to know someone who is good
        with grep and regular expressions too.`,
        image: 'https://external-preview.redd.it/V77U-n3OuvNr2I14hRYUcyXBJ1C9dEMV3HUt3dAIViw.png?auto=webp&s=20d05cf394bd203741ddfdffa904af94fdd90544'
    }
    ];

    constructor() {
    }
}
