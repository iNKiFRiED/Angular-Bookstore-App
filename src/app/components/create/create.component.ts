import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;
  title: FormControl;
  subtitle: FormControl;
  description: FormControl;
  authors: FormArray;
  publisher: FormControl;
  published: FormControl;
  pages: FormControl;
  categories: FormArray;
  isbn10: FormControl;
  isbn13: FormControl;

  @Output() addBook = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // We use the FormBuilder to create the form
    // since it provides a solid way of creating formControls
    // and also formArray for repeater fields
    // along with validators which we can use with regex to validate user input
    this.title = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(120)
    ]);
    this.subtitle = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(120)
    ]);
    this.description = this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(512),
      Validators.pattern('^[A-Z].*')
    ]);
    this.authors = this.formBuilder.array([
      this.formBuilder.control('', Validators.required)
    ]);
    this.publisher = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]);
    this.published = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]);
    this.pages = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(4),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]);
    this.categories = this.formBuilder.array([
      this.formBuilder.control('', Validators.required)
    ]);
    this.isbn10 = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]);
    this.isbn13 = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]);
    this.bookForm = this.formBuilder.group({
      title: this.title,
      subtitle: this.subtitle,
      description: this.description,
      authors: this.authors,
      publisher: this.publisher,
      published: this.published,
      pages: this.pages,
      categories: this.categories,
      isbn10: this.isbn10,
      isbn13: this.isbn13
    });
  }

  onSubmit() {
    // use EventEmitter to delegate the form data to the container
    if (this.bookForm.valid) {
      this.addBook.emit(this.bookForm.value);
    }
  }

  get authorsArray() {
    return this.bookForm.get('authors') as FormArray;
  }

  get categoriesArray() {
    return this.bookForm.get('categories') as FormArray;
  }

  addAuthor() {
    this.authors.push(this.formBuilder.control('', Validators.required));
  }

  removeAuthor(index) {
    this.authorsArray.removeAt(index);
  }

  addCategory() {
    this.categories.push(this.formBuilder.control('', Validators.required));
  }

  removeCategory(index) {
    this.categoriesArray.removeAt(index);
  }

}
