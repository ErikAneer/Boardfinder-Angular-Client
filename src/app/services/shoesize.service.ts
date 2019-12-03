import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoesize } from '../shoesize';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShoesizeService {

  private shoesizeUrl: string;

  constructor(private http: HttpClient) {
    this.shoesizeUrl = 'http://localhost:8080/shoesize';
  }
 
  public findAll(): Observable<Shoesize[]> {
    return this.http.get<Shoesize[]>(this.shoesizeUrl);
  }
}
