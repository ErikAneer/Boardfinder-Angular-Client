import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { RiderLevelService } from '../../services/rider-level.service';
import { Router } from '@angular/router';
import { RiderLevel } from '../../riderLevel';

@Component({
  selector: 'app-selectrider',
  templateUrl: './selectriderlevel.component.html',
  styleUrls: ['./selectriderlevel.component.scss']
})
export class SelectriderlevelComponent implements OnInit {

  isSubmitted = false;
  riderLevels: RiderLevel[];
  selectedRiderLevel: string = "";
  errorMessage = '';
  constructor(private riderLevelService: RiderLevelService, private interactionService: InteractionService, private router: Router) { }


  ngOnInit() {

    this.riderLevelService.findAll().subscribe(data => {
      this.riderLevels = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    );
  }

  saveRiderLevel(form: any) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } if (form.valid) {
      this.selectedRiderLevel = form.value.riderlevelradio;
      this.interactionService.storeRiderLevel(form.value.riderlevelradio);
      this.router.navigate(['/ridingterrain']);
    }
  }
}
