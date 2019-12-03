import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { SnowboardService } from '../../services/snowboard.service';
import { Snowboard } from '../../snowboard';

@Component({
  selector: 'app-selectedboard',
  templateUrl: './selectedboard.component.html',
  styleUrls: ['./selectedboard.component.scss']
})
export class SelectedboardComponent implements OnInit {

  selctedBoardId: number;
  selectedBoard: Snowboard;
  recommendedBoardLengths: String[];
  recommendedLength: String;
  stiffness: number;
  riderWeight: number;
  shoeSize: number;

  errorMessage = '';
  constructor(private interactionService: InteractionService, private snowboardService: SnowboardService) { }

  ngOnInit() {
    this.interactionService.boardIdToDisplay$.subscribe(
      message => {
        this.selctedBoardId = message;
      });

    this.interactionService.userriderweight$.subscribe(
      message => {
      this.riderWeight = message;
      });

    this.interactionService.usershoesize$.subscribe(
      message => {
      this.shoeSize = message;
      });
    
    this.getSelectedBoardFromDB()

  }

  getSelectedBoardFromDB() {
    this.snowboardService.getBoardToDisplayById(this.selctedBoardId).subscribe(data => {
      this.selectedBoard = data;
      this.getRecommendedBoardLengths();

      this.setStiffness();
    },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
  setStiffness() {
    this.stiffness = this.selectedBoard.stiffness * 10;
  }

  getRecommendedBoardLengths() {
    this.snowboardService.getRecommendedBoardLengths(
      this.selctedBoardId, this.riderWeight, this.shoeSize).subscribe(data => {
        this.recommendedBoardLengths = data;
      },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }

}
