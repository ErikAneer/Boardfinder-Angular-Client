
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RiderLevel } from '../riderLevel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiderLevelService {

  private shapeUrl: string;
 
  constructor(private http: HttpClient) {
    this.shapeUrl = 'http://localhost:8080/riderlevel';
  }
 
  public findAll(): Observable<RiderLevel[]> {
    return this.http.get<RiderLevel[]>(this.shapeUrl);
  }
}
