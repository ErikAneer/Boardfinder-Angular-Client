import { Component, OnInit } from '@angular/core';
import { TechdetailService } from '../../services/techdetail.service';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';
import { Techdetail } from 'src/app/techdetail';

@Component({
  selector: 'app-selectbend',
  templateUrl: './selectbend.component.html',
  styleUrls: ['./selectbend.component.scss']
})
export class SelectbendComponent implements OnInit {

  isSubmitted = false;
  selectedBend: string = "";
  bends: Techdetail[];

  errorMessage = '';
  constructor(private techdetailService: TechdetailService, private interactionService: InteractionService, private router: Router) { }

  ngOnInit() {
    this.techdetailService.findAll("bend").subscribe(data => {
      this.bends = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    );
  }

  saveBend(form: any) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } if (form.valid) {
      this.selectedBend = form.value.bendradios;
      this.interactionService.storeBend(this.selectedBend);
      this.router.navigate(['/shape']);
    }
  }
}
