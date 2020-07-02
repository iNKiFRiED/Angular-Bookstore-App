import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreComponent } from './bookstore.component';
import { DEFAULT_COLLECTION_STATE } from '../models/UICollectionState';

describe('BookstoreComponent', () => {
  let component: BookstoreComponent;
  let fixture: ComponentFixture<BookstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreComponent);
    component = fixture.componentInstance;
    component.cs = { ...DEFAULT_COLLECTION_STATE };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
