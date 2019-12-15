import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-totalsearches',
  templateUrl: './totalsearches.component.html',
  styleUrls: ['./totalsearches.component.scss']
})
export class TotalsearchesComponent implements OnInit {

  errorMessage = '';
  totalNumber: number;
  constructor(private statsService : StatsService) { }

  ngOnInit() {
    this.statsService.getTotalNumerOfSearches().subscribe(data => {
      this.totalNumber = data;
      console.log("Number of seaches: " + data)
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    
    );
  }

}
