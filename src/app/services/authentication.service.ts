import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserDto } from '../userdto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.baseUrl;
  answer: String;
  loggedin: Boolean = false;
  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) : Observable<HttpResponse<UserDto>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + "/auth/", { username, password }, {
      headers, responseType: "json",
      observe: 'response'
    })
      .pipe(map(
        (response: any) => {
          sessionStorage.setItem('username', username);
          let tokenStr = response.headers.get('authorization');
          sessionStorage.setItem('token', tokenStr);
          sessionStorage.setItem('role', response.body.role);
          return response;
        }
      )
    );
  }

  checkIfUserLoggedInBackend() {
    return this.httpClient.get<any>(this.baseUrl + '/users/isloggedin');
  }

  isUserLoggedIn() {
    this.loggedin = true;
    return !(sessionStorage.getItem('username') === null)
  }

  logOut() {
    return this.httpClient.get<any>(this.baseUrl + '/users/logout');
  }

  clearSession() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    this.loggedin = false;
  }
}
