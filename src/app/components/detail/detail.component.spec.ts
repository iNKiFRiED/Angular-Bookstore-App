import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './detail.component';
import { DEFAULT_COLLECTION_STATE } from '../../models/UICollectionState';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    component.cs = { ...DEFAULT_COLLECTION_STATE };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
