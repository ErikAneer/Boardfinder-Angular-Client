import { Injectable } from '@angular/core';
import { RidingType } from '../ridingTerrain';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RidingterrainService {

  private ridingterrainUrl: string;
  baseUrl = environment.baseUrl;
 
  constructor(private http: HttpClient) {
    this.ridingterrainUrl = '/ridingterrain/';
  }
 
  public findAll(): Observable<RidingType[]> {
    return this.http.get<RidingType[]>(this.baseUrl + this.ridingterrainUrl);
  }
}
