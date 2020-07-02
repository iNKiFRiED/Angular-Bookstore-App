import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../..//models/Book';
import { UICollectionState } from '../../models/UICollectionState';

@Component({
  selector: 'app-book-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() isbn: string;
  @Input() books: Book[];
  @Input() cs: UICollectionState;

  @Output() navigationEv = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  get book() {
    return this.books.find(book => book.isbn13 === this.isbn);
  }

  get otherBooks() {
    return this.books.filter(book => book.isbn13 !== this.isbn);
  }

}
