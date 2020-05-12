import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Snowboard } from '../snowboard';
import { SnowboardFilterObject } from '../snowboardFilterObject';

@Injectable({
  providedIn: 'root'
})
export class InteractionService implements OnInit{

  private userGender = new BehaviorSubject<string>("");
  private userRiderWeight = new BehaviorSubject<number>(0);
  private userShoeSize = new BehaviorSubject<number>(0);
  private userRiderLevel = new BehaviorSubject<string>("");
  private userPreferredTerrain = new BehaviorSubject<string>("");
  private userBend = new BehaviorSubject<string>("");
  private userShape = new BehaviorSubject<string>("");
  private userFlex = new BehaviorSubject<string>("");

  //Board to display¨
  private boardIdToDisplay = new BehaviorSubject<number>(0);
  private snowboards = new BehaviorSubject<Array<Snowboard>>(null);
  private snowboardsAlternativeFilter = new BehaviorSubject<Array<Snowboard>>(null);
  private hasReceivedBoardsFromDB = new BehaviorSubject<boolean>(false);

  // Path
  private previousPage= new BehaviorSubject<string>("");

  private errorTitle = new BehaviorSubject<string>("");
  private errorMessage = new BehaviorSubject<string>("");

  usergender$ = this.userGender.asObservable();
  userriderweight$ = this.userRiderWeight.asObservable();
  usershoesize$ = this.userShoeSize.asObservable();
  userriderlevel$ = this.userRiderLevel.asObservable();
  userpreferredterrain$ = this.userPreferredTerrain.asObservable();
  userbend$ = this.userBend.asObservable();
  usershape$ = this.userShape.asObservable();
  userflex$ = this.userFlex.asObservable();

  boardIdToDisplay$ = this.boardIdToDisplay.asObservable();
  snowboards$ = this.snowboards.asObservable();
  snowboardsAlternativeFilter$ = this.snowboardsAlternativeFilter.asObservable();
  hasReceivedBoardsFromDB$ = this.hasReceivedBoardsFromDB.asObservable();

  previousPage$ = this.previousPage.asObservable();

  errorTitle$ = this.errorTitle.asObservable();
  errorMessage$ = this.errorMessage.asObservable();

  constructor() { }

  ngOnInit(){
    this.nullSearchParametersTotally();
  }

  storeGender(message: string){
    this.userGender.next(message);
  }

  storeRiderWeight(message: number){
    this.userRiderWeight.next(message);
  }

  storeShoeSize(message: number){
    this.userShoeSize.next(message);
  }

  storeRiderLevel(message: string){
    this.userRiderLevel.next(message);
  }

  storeTerrain(message: string){
    this.userPreferredTerrain.next(message);
  }

  storeBend(message: string){
    this.userBend.next(message);
  }

  storeShape(message: string){
    this.userShape.next(message);
  }

  storeFlex(message: string){
    this.userFlex.next(message);
  }

  storeBoardIdToDisplay(message: number){
    this.boardIdToDisplay.next(message);
  }

  storeBoardsToDisplayFromFilter(message: Array<Snowboard>){
    this.snowboards.next(message);
  }

  storeAlternativeBoardsToDisplayFromFilter(message: Array<Snowboard>){
    this.snowboardsAlternativeFilter.next(message);
  }

  setReceivedBoardsFRomDB(message: boolean){
    this.hasReceivedBoardsFromDB.next(message);
  }

  storePreviousPage(message: string){
    this.previousPage.next(message);
  }

  storeErrorTitle(message: string){
    this.errorTitle.next(message);
  }

  storeErrorMessage(message: string){
    this.errorMessage.next(message);
  }


  nullSearchParametersTotally(){
    this.storeGender("");
    this.storeRiderWeight(0);
    this.storeShoeSize(0);
    this.storeRiderLevel("");
    this.storeTerrain("null"); 
    this.storeBend("message: string");
    this.storeShape("");
    this.storeFlex("");
    this.storeBoardIdToDisplay(0);
    this.storeBoardsToDisplayFromFilter(null);
    this.storeAlternativeBoardsToDisplayFromFilter(null);
    this.setReceivedBoardsFRomDB(false);
  }

  nullSearchParametersNewSearch(){
    this.storeRiderWeight(0);
    this.storeShoeSize(0);
    this.storeRiderLevel("");
    this.storeTerrain("null"); 
    this.storeBend("message: string");
    this.storeShape("");
    this.storeFlex("");
    this.storeBoardIdToDisplay(0);
    this.storeBoardsToDisplayFromFilter(null);
    this.storeAlternativeBoardsToDisplayFromFilter(null);
    this.setReceivedBoardsFRomDB(false);
  }
}
