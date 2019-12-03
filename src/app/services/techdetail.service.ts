import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Techdetail} from '../techdetail'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechdetailService {

  private techdetailUrl: string = '/techdetails/';
  baseUrl = environment.baseUrl;
 
  constructor(private http: HttpClient) {
  }
 
  public findAll(path: string): Observable<Techdetail[]> {
    return this.http.get<Techdetail[]>(this.baseUrl + this.techdetailUrl + path);
  }
}
