import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shoesize } from '../shoesize';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ShoesizeService {

  private shoesizeUrl: string;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.shoesizeUrl = '/shoesizes/';
  }
 
  public findAllByGender(selectedgender: string): Observable<Shoesize[]> {
    return this.http.get<Shoesize[]>(this.baseUrl + this.shoesizeUrl + selectedgender);
  }
}
