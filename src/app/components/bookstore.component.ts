import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../models/Book';
import { UICollectionState } from '../models/UICollectionState';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss']
})
export class BookstoreComponent implements OnInit {

  @Input() books: Book[];
  @Input() cs: UICollectionState;

  searchQuery: string;

  constructor() { }

  ngOnInit() { }

}
