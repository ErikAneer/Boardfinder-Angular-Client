import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Snowboard } from '../snowboard';
import { Observable } from 'rxjs';
import { SnowboardFilterObject } from '../snowboardFilterObject';
import { RequestOptions } from '@angular/http';

@Injectable()
export class SnowboardService {

  private boardsUrl: string = 'http://localhost:8080/board';
  sbFObject: SnowboardFilterObject;

  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<Snowboard[]> {
    return this.http.get<Snowboard[]>(this.boardsUrl);
  }

  public save(snowboard: Snowboard) {
    return this.http.post<Snowboard>(this.boardsUrl, snowboard);
  }

  getRecommendedBoardLengths(boardId: number, riderWeight: number, shoeSize: number): Observable<String[]> {
    return this.http.post<any>(this.boardsUrl + '/recommendedlength',
      {
        boardId, riderWeight: riderWeight,
        shoeSize: shoeSize
      });
  }

  filterSnowboards(filterobject: SnowboardFilterObject): Observable<Snowboard[]> {

    return this.http.post<any>(this.boardsUrl + '/filter',
      {
        gender: filterobject.gender, riderWeight: filterobject.riderWeight,
        shoeSize: filterobject.shoeSize, riderLevel: filterobject.riderLevel,
        preferredTerrain: filterobject.preferredTerrain, bend: filterobject.bend,
        shape: filterobject.shape, flex: filterobject.flex
      });
  }

  filterSnowboardsWithAlternativeBendAndShape(filterobject: SnowboardFilterObject): Observable<Snowboard[]> {
    return this.http.post<any>(this.boardsUrl + '/filteralternative',
      {
        gender: filterobject.gender, riderWeight: filterobject.riderWeight,
        shoeSize: filterobject.shoeSize, riderLevel: filterobject.riderLevel,
        preferredTerrain: filterobject.preferredTerrain, bend: filterobject.bend,
        shape: filterobject.shape, flex: filterobject.flex
      });
  }

  getBoardToDisplayById(boardId: number): Observable<Snowboard> {
    return this.http.get<any>(this.boardsUrl + '/' + boardId);
  }

  getTop3PopularBoardsByIds(boardIds: number[]): Observable<Snowboard[]> {
    return this.http.get<any>(this.boardsUrl + '/boardsbyids' + boardIds);
  }

}

