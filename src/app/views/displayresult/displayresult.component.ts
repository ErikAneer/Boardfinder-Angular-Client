import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { SnowboardService } from '../../services/snowboard.service';
import { SnowboardFilterObject } from '../../snowboardFilterObject';
import { Snowboard } from '../../snowboard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayresult',
  templateUrl: './displayresult.component.html',
  styleUrls: ['./displayresult.component.scss']
})
export class DisplayresultComponent implements OnInit {

  snowboards: Snowboard[];
  snowboardsAlternativeFilter: Snowboard[];

  //For the request object
  gender: string;
  riderWeight: number;
  shoeSize: number;
  riderLevel: string;
  preferredTerrain: string;
  bend: string;
  shape: string;
  flex: string;

  receivedBoardsFromDB: boolean;

  requestObject = new SnowboardFilterObject(this.gender, this.riderWeight, this.shoeSize, this.riderLevel,
    this.preferredTerrain, this.bend, this.shape, this.flex);

  errorMessage = '';

  constructor(private interactionService: InteractionService,
    private snowboardService: SnowboardService, private router: Router) {

  }

  ngOnInit() {

    this.interactionService.hasReceivedBoardsFromDB$.subscribe(
      message => {
        this.receivedBoardsFromDB = message;
      });

    this.interactionService.usergender$.subscribe(
      message => {
        this.gender = message;
      });

    this.interactionService.userriderweight$.subscribe(
      message => {
        this.riderWeight = message;
      });

    this.interactionService.usershoesize$.subscribe(
      message => {
        this.shoeSize = message;
      });

    this.interactionService.userriderlevel$.subscribe(
      message => {
        this.riderLevel = message;
      });

    this.interactionService.userpreferredterrain$.subscribe(
      message => {
        this.preferredTerrain = message;
      });
    this.interactionService.userbend$.subscribe(
      message => {
        this.bend = message;
      });

    this.interactionService.usershape$.subscribe(
      message => {
        this.shape = message;
      });

    this.interactionService.userflex$.subscribe(
      message => {
        this.flex = message;
      });

    if (this.receivedBoardsFromDB == false) {
      this.filterBoards();
    }
    else {
      this.interactionService.snowboards$.subscribe(
        message => {
          this.snowboards = message;
        });

      this.interactionService.snowboardsAlternativeFilter$.subscribe(
        message => {
          this.snowboardsAlternativeFilter = message;
        });
      if (this.snowboards == null) {
        this.backToStart();
      }
    }
  }

  filterBoards() {
    this.snowboardService.filterSnowboards(new SnowboardFilterObject(
      this.gender, this.riderWeight, this.shoeSize, this.riderLevel,
      this.preferredTerrain, this.bend, this.shape, this.flex)).subscribe(data => {
        this.snowboards = data;
        this.saveSnowboards();
        if (this.snowboards.length <= 6) {
          this.filterBoardsWithAlternativeBendAndShape();
        }
      },
        (error) => {
          this.errorMessage = error.message;
        }
      );

    this.interactionService.setReceivedBoardsFRomDB(true);
  }
  filterBoardsWithAlternativeBendAndShape() {
    this.snowboardService.filterSnowboardsWithAlternativeBendAndShape(
      new SnowboardFilterObject(this.gender, this.riderWeight, this.shoeSize,
        this.riderLevel, this.preferredTerrain, this.bend, this.shape, this.flex))
      .subscribe(data1 => {
        this.snowboardsAlternativeFilter = data1;
        this.saveSnowboardsAlternativeFilter();
      },
        (error) => {
          this.errorMessage = error.message;
        }
      );

  }

  setSelectedBoard(boardId: number, currentPage: string) {
    this.interactionService.storePreviousPage(currentPage);
    this.interactionService.storeBoardIdToDisplay(boardId);
    this.router.navigate(['/selectedboard']);
  }

  newSearch() {
    this.interactionService.nullSearchParametersNewSearch();
    this.router.navigate(['/weight']);
  }

  backToStart() {
    this.interactionService.nullSearchParametersTotally();
    this.router.navigate(['/home']);
  }

  saveSnowboards() {
    this.interactionService.storeBoardsToDisplayFromFilter(this.snowboards);
  }

  saveSnowboardsAlternativeFilter() {
    this.interactionService.storeAlternativeBoardsToDisplayFromFilter(this.snowboardsAlternativeFilter);
  }

}

