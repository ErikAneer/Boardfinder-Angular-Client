import { Injectable } from '@angular/core';
import { Stats } from '../stats';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsUrl: string;

  constructor(private http: HttpClient) {
    this.statsUrl = 'http://localhost:8081/displayedboardstats';
  }
 
  public getTop3DisplayedBoardIds(): Observable<number[]> {
    return this.http.get<number[]>(this.statsUrl + "/top3displayedboards");
  }
}
