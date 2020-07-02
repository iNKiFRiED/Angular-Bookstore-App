import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BookstoreHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {

                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                } else {
                    // The backend returned an unsuccessful response code.
                    // The response body contains unescaped characters so we need to parse them correctly
                    const escapeResponse = err.error.text.replace('"You Don’t Know JS"', '\'You Don’t Know JS\'');
                    const parsedResponse = JSON.parse(escapeResponse);
                    // Now we return and Observable HTTP response with the parsed response
                    return of(new HttpResponse({
                        body: parsedResponse.books
                    }));
                }

                // ...optionally return a default fallback value so app can continue (pick one)
                // which could be a default value (which has to be a HttpResponse here)
                // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
                // or simply an empty observable
                return EMPTY;
            })
        );
    }
}
