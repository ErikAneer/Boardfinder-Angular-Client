import { Injectable } from "@angular/core";
import { Resolve, Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class RouteResolver implements Resolve<any> {
   constructor(private router: Router,
    private loginservice: AuthenticationService) { }

   resolve() {
      return this.loginservice.checkIfUserLoggedInBackend().pipe(
         map(data => { 
            if(!data) {
               this.loginservice.clearSession();
               this.router.navigate(['/login']);
            }
          }),
         catchError((error) => {
            this.router.navigate(['/login']);
            return of('User not logged in');
         })
      )
   }
}