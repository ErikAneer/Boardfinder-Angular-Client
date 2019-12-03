import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { RidingterrainService } from '../../services/ridingterrain.service';
import { RidingType } from '../../ridingTerrain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectridingtypecomponent',
  templateUrl: './selectridingtypecomponent.component.html',
  styleUrls: ['./selectridingtypecomponent.component.scss']
})
export class SelectridingtypeComponent implements OnInit {
  isSubmitted = false;
  selectedTerrain: string = "";
  riderTerrains: RidingType[];
  errorMessage = '';
  constructor(private interactionService: InteractionService, private ridingterrainService: RidingterrainService, private router: Router) { }

  ngOnInit() {
    this.ridingterrainService.findAll().subscribe(data => {
      this.riderTerrains = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }  
    );
  }

  saveTerrain(form: any) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } if (form.valid) {
      this.selectedTerrain = form.value.terrainradios;
      this.interactionService.storeTerrain(this.selectedTerrain);
      this.router.navigate(['/bend']);
    }
  }
}
