import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public testUserService(username: String, password: String): Observable<String> {

    console.log("test user service login called")
    return this.http.post(this.baseUrl + "/users/login", { "username": username, "password": password }, { responseType: 'text' });
  }


}
