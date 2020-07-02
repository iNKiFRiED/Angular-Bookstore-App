import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';

import { ApiBook } from '../../models/ApiBook';

@Injectable({
    providedIn: 'root'
})
export class BookstoreService {

    private REST_API_ENDPOINT = 'https://gist.githubusercontent.com/nanotaboada/6396437/raw/82dca67cc3b6a5ccfcf8af012664cdaa0025d999/books.json';

    constructor(private http: HttpClient) { }

    /**
     * This method is used to retireve the books from the API.
     * Because there is a parsing error with the response, am HTTP interceptor
     * has been implemented to handle the error and pass it down correctly.
     */
    public getBooks(): Observable<ApiBook[]> {
      return this.http.get<ApiBook[]>(this.REST_API_ENDPOINT);
    }

}
