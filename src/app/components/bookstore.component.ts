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
  @Input() authors: string[];
  @Input() publishers: string[];
  @Input() cs: UICollectionState;

  searchQuery = '';
  filterAuthorQuery = '';
  filterPublisherQuery = '';

  constructor() { }

  ngOnInit() { }

  onSelectAuthor(event){
    this.filterAuthorQuery = event.target.value.toLowerCase();
  }

  onSelectPublisher(event){
    this.filterPublisherQuery = event.target.value.toLowerCase();
  }

}
