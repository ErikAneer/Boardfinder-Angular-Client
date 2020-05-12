import { Injectable } from "@angular/core";
import { Resolve, Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { LoginComponent } from "../views/login/login.component";
import { InteractionService } from "./interaction.service";

@Injectable()
export class RouteResolver implements Resolve<any> {
   constructor(private router: Router,
    private loginservice: AuthenticationService,
    private interactionService: InteractionService) { }

   resolve() {
      return this.loginservice.checkIfUserLoggedInBackend().pipe(
         map(data => { 
            if(data && sessionStorage.getItem('role') !== "ROLE_ADMIN") {   
               this.loginservice.clearSession();
               this.router.navigate(['/login']);
               this.interactionService.storeErrorTitle("NO NO!")
               this.interactionService.storeErrorMessage("Only admins can login! Please log in as an Admin!")
            }
            if(!data) {   
               this.loginservice.clearSession();
               this.router.navigate(['/login']);
               this.interactionService.storeErrorTitle("Ooops...")
               this.interactionService.storeErrorMessage("It seems like the login credentials are bad. Please try again!")
            }
          }),
         catchError((error) => {
            this.router.navigate(['/login']);
            return of('User not logged in');
         })
      )
   }
}