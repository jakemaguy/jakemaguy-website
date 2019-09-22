export class BlogPost {
    title: string;
    date: string;
    logoURL: string;

    constructor(title: string, date: string, logoURL: string) {
        this.title = title;
        this.date = date;
        this.logoURL = logoURL;
    }
}
