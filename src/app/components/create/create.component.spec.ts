import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormArray, ValidationErrors } from '@angular/forms';

import { BookCreateComponent } from './create.component';
import { Book } from '../../models/Book';

describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookCreateComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be thorw error when input is invalid', () => {
    const invalidBook = new Book({
      title: 'Book',
      subtitle: 'Aseetions for a test book',
      description: 'Description should start with capital letter.',
      authors: ['Chuck Norris'],
      pages: '110',
      publisher: 'Karate Kid Books',
      published: '1995',
      categories: ['Kung Fu'],
      isbn10: '1234567890000',
      isbn13: '1234567890123'
    });

    component.bookForm.get('title').setValue(invalidBook.title);
    component.bookForm.get('isbn10').setValue(invalidBook.isbn10);

    expect(component.bookForm.get('title').errors).toBeTruthy();
    expect(component.bookForm.get('isbn10').errors).toBeTruthy();
  });

  it('should be valid when input is valid', () => {
    const validBook = new Book({
      title: 'Testing book',
      subtitle: 'Aseetions for a test book',
      description: 'Description should start with capital letter.',
      authors: ['Chuck Norris'],
      pages: '110',
      publisher: 'Karate Kid Books',
      published: '1995',
      categories: ['Kung Fu'],
      isbn10: '1234567890',
      isbn13: '1234567890123'
    });

    // set all text, textarea inputs
    component.bookForm.get('title').setValue(validBook.title);
    component.bookForm.get('subtitle').setValue(validBook.subtitle);
    component.bookForm.get('description').setValue(validBook.description);
    component.bookForm.get('pages').setValue(validBook.pages);
    component.bookForm.get('publisher').setValue(validBook.publisher);
    component.bookForm.get('published').setValue(validBook.published);
    component.bookForm.get('isbn10').setValue(validBook.isbn10);
    component.bookForm.get('isbn13').setValue(validBook.isbn13);

    // for repeater fields it's a bit more complex to set values
    const authorsField = component.bookForm.get('authors') as FormArray;
    authorsField.at(0).patchValue('Chuck Norris');

    const categoriesField = component.bookForm.get('categories') as FormArray;
    categoriesField.at(0).patchValue('Kung Fu');

    expect(component.bookForm.valid).toBeTruthy();
  });

});
