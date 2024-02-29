import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';

const url = 'https://65defb2dff5e305f32a10a87.mockapi.io/api/cl/clients';

@Injectable()
export class HttpService {

   constructor(private http: HttpClient){}

   // getObjects(): Observable<any[]> {
   //    return this.http.get<any[]>(url);
   // }

   // RADI
   // postObjects(data: any | object): Observable<any> {
   //    return this.http.post(url, data)
   // }

   // postObjects(data: any): Observable<any> {
   //    return this.http.post(url, data, { observe: 'response' }).pipe(
   //       map(data => {
   //          return data;
   //       })
   //    );
   // }

   // map(data =>{
   //    console.log(data);    
   //    return data; 
   //    })


   // NE RADI
   // postObjects(data: any): Observable<any> {
   //    return this.http.post(url, data, { observe: 'response' }).pipe(
   //       // map(response => response.body)
   //       switchMap(() => this.http.get<any[]>(url))
   //    );
   // }

   // NE RADI
   // handleError(error: HttpErrorResponse) {
   //    if (error.status === 0) {
   //      // A client-side or network error occurred. Handle it accordingly.
   //      console.error('An error occurred:', error.error);
   //    } else {
   //      // The backend returned an unsuccessful response code.
   //      // The response body may contain clues as to what went wrong.
   //      console.error(
   //        `Backend returned code ${error.status}, body was: `, error.error);
   //    }
   //    // Return an observable with a user-facing error message.
   //    return throwError(() => new Error('Something bad happened; please try again later.'));
   // } 
   // postObjects(data: any): Observable<any> {
   //    return this.http.post(url, data, { observe: 'response' }).pipe(
   //       catchError(this.handleError('postObjects', data))
   //    );
   // }
}