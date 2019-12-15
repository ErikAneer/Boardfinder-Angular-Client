import { Injectable } from '@angular/core';
import { Stats } from '../stats';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Techdetailstats } from '../techdetailstats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private displayedBoardsUrl: string = '/displayedboards/';
  private statsUrl: string = '/stats/';

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

    return this.http.get<number[]>(this.baseUrl + this.displayedBoardsUrl + "top3displayedboards", requestOptions);
  }

  public getTotalNumerOfSearches(): Observable<number> {
    return this.http.get<number>(this.baseUrl + this.statsUrl + "totalsearches");
  }

  public getTotalNumerOfDisplayedBoards(): Observable<number> {
    return this.http.get<number>(this.baseUrl + this.displayedBoardsUrl + "totalnumber");
  }

  public getTechSpecsStats(techspec: String): Observable<Techdetailstats> {
    return this.http.get<Techdetailstats>(this.baseUrl + this.statsUrl + techspec);
  }

  public getAllDisplayedBoardsStats(): Observable<Techdetailstats> {
    return this.http.get<Techdetailstats>(this.baseUrl + this.displayedBoardsUrl + "alldisplayedboards");
  }
}
