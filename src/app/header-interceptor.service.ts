import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = '';
    req = req.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        'Content-Type': 'application/json;charset=UTF-8',
        'USER-TOKEN': userToken
      }
    });
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            if (event?.body && event.body?.errors) {
              // TO DO
              return;
            }
          }
        },
        error => {
          if (error.status !== 200) {
            if (!(error.status === 400)) {
              if (error.error && error.error?.errors) {
                // TO DO
                return;
              }
              // not include 'usage-log' request
              if (error.url.indexOf('usage-log') === -1) {
                // TO DO
                return;
              }
            }
          }
        })
    );


  }


}
