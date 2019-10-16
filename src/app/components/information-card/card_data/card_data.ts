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
        title: 'Proficient in Angular',
        content: `I am a self-taught Angular Developer, who learned the framework as a passion project.  I wanted an online platform to showcase my experience quickly and easily.  This website is the result of many hours teaching myself fundamental concepts of angular and applying proper design patterns.`,
        image: 'https://www.stickpng.com/assets/images/5847ea22cef1014c0b5e4833.png'
    },
    {
        title: 'Full Stack Experience',
        content: `I am a backend engineer at my current position.  I specialized in MySQL and MSSQL, fetching and displaying sensitive customer data.  Throughout the work of creating this website, I learned NoSQL.  On the front-end side, making this website responsive on all devices was a big priority of mine.`,
        image: 'https://icons-for-free.com/iconfiles/png/512/file+sql+icon-1320183612970878250.png'
    },
    {
        title: 'Languages',
        content: `I have experience with object oriented languages such as Typescript, Python, C#,
        and C++.  I am also open to learn new languages and technologies.`,
        image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
    },
    {
        title: 'Command Line Experience',
        content: `I know how to use the UNIX command line effectively.  I have experience writing bash scripts, using regular expressions, grepping files, using vim, and many more.`,
        image: 'https://external-preview.redd.it/V77U-n3OuvNr2I14hRYUcyXBJ1C9dEMV3HUt3dAIViw.png?auto=webp&s=20d05cf394bd203741ddfdffa904af94fdd90544'
    }
    ];

    constructor() {
    }
}
