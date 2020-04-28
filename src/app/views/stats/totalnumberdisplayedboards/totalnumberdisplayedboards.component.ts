import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-totalnumberdisplayedboards',
  templateUrl: './totalnumberdisplayedboards.component.html',
  styleUrls: ['./totalnumberdisplayedboards.component.scss']
})
export class TotalnumberdisplayedboardsComponent implements OnInit {
  errorMessage = '';
  totalNumer: number;
  constructor(private statsService : StatsService) { }

  ngOnInit() {
    this.statsService.getTotalNumerOfDisplayedBoards().subscribe(data => {
      this.totalNumer = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    
    );
  }

}
