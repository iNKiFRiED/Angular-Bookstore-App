/**
 * The Book class is used to map the server's response
 * and also handle the missing properties or format them according
 * to our needs for the presentation layer.
 */
export class Book {
    cover: string;
    coverLarge: string;
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    published: string;
    pages: number;
    description: string;
    website: string;
    isbn10: string;
    isbn13: string;
    wishlist: boolean;
    categories: string[];

    constructor(args) {
        this.cover = 'http://covers.openlibrary.org/b/isbn/' + args.isbn  + '-M.jpg';
        this.coverLarge = 'http://covers.openlibrary.org/b/isbn/' + args.isbn  + '.jpg';
        this.title = args.title;
        this.subtitle = args.subtitle;
        this.authors = !!args.authors ? args.authors : [args.author];
        this.publisher = args.publisher;
        this.published = args.published;
        this.pages = args.pages;
        this.description = args.description;
        this.website = args.website;
        this.isbn13 = args.isbn13 ? args.isbn13 : args.isbn;
        this.isbn10 = args.isbn10 || '';
        this.wishlist = args.wishlist || false;
        this.categories = args.categories || ['Code', 'Javascript'];
    }
}
