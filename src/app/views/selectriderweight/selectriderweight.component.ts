import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectriderweight',
  templateUrl: './selectriderweight.component.html',
  styleUrls: ['./selectriderweight.component.scss']
})
export class SelectriderweightComponent implements OnInit {
  gender: string = "";
  range: number;
  min: number;
  max: number;
 constructor(private interactionService : InteractionService, private router: Router) { }

  ngOnInit() {

    this.interactionService.usergender$.subscribe(
      message => {
        this.gender = message;
      });

      if (this.gender == "men"){
        this.range = 70;
        this.min = 50;
        this.max = 120;
      }
      if (this.gender == "women"){
        this.range = 50;
        this.min = 36;
        this.max = 95;
      }
      if (this.gender == "kids"){
        this.range = 35;
        this.min = 11;
        this.max = 68;
      }
  }

  saveRiderWeight(value: any) {
    this.range = value.range;
    this.interactionService.storeRiderWeight(value.range);
    this.router.navigate(['/shoesize']);
  }
}
