import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  answer: String;
  loggedin: Boolean = false;
  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    this.loggedin = true;
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    this.loggedin = false;
  }
}
