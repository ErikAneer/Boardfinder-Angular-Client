import { Injectable } from '@angular/core';
import { Stats } from '../stats';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsUrl: string = '/displayedboards/';

  baseUrl = environment.baseUrl; 

  constructor(private http: HttpClient) {
  }
 
  public getTop3DisplayedBoardIds(): Observable<number[]> {
    
    const headerDict = {
      'Content-Type': 'application/json',
  'Accept': 'application/json',
      'Access-Control-Allow-Headers': '*',
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    //const headers = new Headers({'Access-Control-Allow-Headers': '*'});

    return this.http.get<number[]>(this.baseUrl + this.statsUrl + "top3displayedboards", requestOptions);
  }
}
