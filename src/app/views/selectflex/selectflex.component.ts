import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';
import { Techdetail } from 'src/app/techdetail';
import { TechdetailService } from 'src/app/services/techdetail.service';

@Component({
  selector: 'app-selectflex',
  templateUrl: './selectflex.component.html',
  styleUrls: ['./selectflex.component.scss']
})
export class SelectflexComponent implements OnInit {
  gender: string = "";
  isSubmitted = false;
  flexes: Techdetail[];
  selectedFlex: string = "";
  errorMessage = '';

  constructor(private techdetailService: TechdetailService, 
    private interactionService: InteractionService, 
    private router: Router) { }



  ngOnInit() {
    this.interactionService.usergender$.subscribe(
      message => {
        this.gender = message;
      });
    this.techdetailService.findAllByGender("flex", this.gender).subscribe(data => {
      this.flexes = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    );
  }
  
  saveFlex(form: any) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } if (form.valid) {
      this.selectedFlex = form.value.flexradios;
      this.interactionService.storeFlex(this.selectedFlex);
      this.router.navigate(['/result']);
    }
  }
}
