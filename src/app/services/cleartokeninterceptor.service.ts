import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { AuthenticationService } from "./authentication.service";

@Injectable()
export class ClearTokenInterceptor implements HttpInterceptor {
  
  
  constructor(
    private authservice: AuthenticationService
  ) {}

  private _checkTokenExpiryErr(error: HttpErrorResponse): boolean {
    return (
      error.status &&
      error.status === 401
    );
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError((error, caught) => {
          if (error instanceof HttpErrorResponse ) {
            if (this._checkTokenExpiryErr(error) && (sessionStorage.getItem('token') != null 
            && req.url === 'https://localhost:8443/boardfinder/users/isloggedin')) { 
            this.cleartoken();
              req = req.clone({
                setHeaders: {
                  Authorization: ''
                }
              });
            }

            if (this._checkTokenExpiryErr(error) && (sessionStorage.getItem('token') != null)) {
              this.cleartoken();
              req = req.clone({
                setHeaders: {
                  Authorization: ''
                }
              });
              return next.handle(req).pipe(retry(1));
            } else {
              return throwError(error);
            }
          }
          return caught;
        })
      ); 
  }
  cleartoken() {
    this.authservice.clearSession();
  }
}

