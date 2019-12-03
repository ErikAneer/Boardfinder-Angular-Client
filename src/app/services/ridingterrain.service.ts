import { Injectable } from '@angular/core';
import { RidingType } from '../ridingTerrain';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RidingterrainService {

  private shapeUrl: string;
 
  constructor(private http: HttpClient) {
    this.shapeUrl = 'http://localhost:8080/ridingterrain';
  }
 
  public findAll(): Observable<RidingType[]> {
    return this.http.get<RidingType[]>(this.shapeUrl);
  }
}
