import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BookstoreHttpInterceptor } from './interceptor.service';
import { BookstoreService } from './bookstore.service';

describe('BookstoreService', () => {

    let service: BookstoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                BookstoreService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: BookstoreHttpInterceptor,
                    multi: true,
                },
            ]
        });
        service = TestBed.get(BookstoreService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('be able to retrieve books from the API', (done: DoneFn) => {
        // we expect exactly 8 results from the response
        // due to having a set amount of books here
        service.getBooks().subscribe(books => {
            expect(books.length).toEqual(8);
            done();
        });
    });

});
