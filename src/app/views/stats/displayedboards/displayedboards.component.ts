import { Component, OnInit } from '@angular/core';
import { Techdetailstats } from 'src/app/techdetailstats';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-displayedboards',
  templateUrl: './displayedboards.component.html',
  styleUrls: ['./displayedboards.component.scss']
})
export class DisplayedboardsComponent implements OnInit {

  errorMessage = '';
  techdetailstatsspec: Techdetailstats;

  headElements = [];
  columns=[];
  constructor(private statsService : StatsService) { }

  ngOnInit() {
    this.headElements = ['#', 'Brand','Gender', 'Model','Bend', 'Count', 'Percentage'];
    this.statsService.getAllDisplayedBoardsStats().subscribe(data => {
      this.techdetailstatsspec = data;
      this.columns = this.techdetailstatsspec.statsSpecification;
      console.log("Received tech spec stats: " + data)
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    
    );
  }

}
