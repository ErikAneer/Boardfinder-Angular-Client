import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { Stats } from '../../stats';
import { StatsService } from 'src/app/services/stats.service';
import { SnowboardService } from 'src/app/services/snowboard.service';
import { Snowboard } from 'src/app/snowboard';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  stats: number[];
  snowboards: Snowboard[];
  errorMessage = '';

  constructor(private interactionService: InteractionService,
    private statsService: StatsService, private snowboardService: SnowboardService,
    private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.interactionService.nullSearchParametersTotally();
    this.statsService.getTop3DisplayedBoardIds().subscribe(data => {
      this.stats = data;
      this.getTop3BoardsfromStats();
    },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  chooseGender(gender: string) {
    this.router.navigate(['/weight']);
    this.interactionService.storeGender(gender);
  }

  getTop3BoardsfromStats() {
    this.snowboardService.getTop3PopularBoardsByIds(this.stats).subscribe(data => {
      this.snowboards = data;
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
}
