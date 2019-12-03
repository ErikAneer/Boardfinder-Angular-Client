import { Component, OnInit, Input } from '@angular/core';
import { TechdetailService } from 'src/app/services/techdetail.service';
import { Techdetail } from 'src/app/techdetail';

@Component({
  selector: 'app-explorebend',
  templateUrl: './exploretechdetail.component.html',
  styleUrls: ['./exploretechdetail.component.scss']
})
export class ExploreTechDetailComponent implements OnInit {
  @Input() dynamicdata: string;
  techdetails: Techdetail[];
  errorMessage = '';
  constructor(private techdetailService: TechdetailService) { }

  ngOnInit() {
    this.techdetailService.findAll(this.dynamicdata).subscribe(data => {
      this.techdetails = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    );
  }
}
