import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectriderweight',
  templateUrl: './selectriderweight.component.html',
  styleUrls: ['./selectriderweight.component.scss']
})
export class SelectriderweightComponent implements OnInit {

 constructor(private interactionService : InteractionService, private router: Router) { }

  ngOnInit() {

  }

  range: number = 70;

  saveRiderWeight(value: any) {
    this.range = value.range;
    this.interactionService.storeRiderWeight(value.range);
    this.router.navigate(['/shoesize']);
  }
}
