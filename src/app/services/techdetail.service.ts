import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Techdetail} from '../techdetail'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechdetailService {

  private hostUrl: string;
 
  constructor(private http: HttpClient) {
    this.hostUrl = 'http://localhost:8080/techdetail/';
  }
 
  public findAll(path: string): Observable<Techdetail[]> {
    return this.http.get<Techdetail[]>(this.hostUrl+path);
  }
}
