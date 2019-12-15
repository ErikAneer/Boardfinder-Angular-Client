
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RiderLevel } from '../riderLevel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RiderLevelService {

  private riderlevelUrl: string;
  baseUrl = environment.baseUrl;
 
  constructor(private http: HttpClient) {
    this.riderlevelUrl = '/riderlevel';
  }
 
  public findAll(): Observable<RiderLevel[]> {
    return this.http.get<RiderLevel[]>(this.baseUrl + this.riderlevelUrl);
  }
}
