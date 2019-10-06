export class BlogPost {
    constructor(
        public title: string,
        public date: string,
        public logoURL: string) {
        this.title = title;
        this.date = date;
        this.logoURL = logoURL;
    }
}
