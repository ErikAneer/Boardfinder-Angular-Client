import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError} from 'rxjs/operators';

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpEvent<any>> {

          return next.handle(req).pipe(
             catchError( (error) => {
               return throwError(error);
          })
        )
    }
}
