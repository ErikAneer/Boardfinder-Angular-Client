import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { Techdetailstats } from 'src/app/techdetailstats';

@Component({
  selector: 'app-techdetailstats',
  templateUrl: './techdetailstats.component.html',
  styleUrls: ['./techdetailstats.component.scss']
})
export class TechdetailstatsComponent implements OnInit {
  @Input() dynamicdata: string;
  errorMessage = '';
  techdetailstatsspec: Techdetailstats;

  headElements = [];
  columns=[];
  constructor(private statsService : StatsService) { }

  ngOnInit() {
    this.headElements = ['#', this.dynamicdata[0].toUpperCase() + this.dynamicdata.substr(1).toLowerCase(), 'Count', 'Percentage'];
    this.statsService.getTechSpecsStats(this.dynamicdata).subscribe(data => {
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
