import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectgender',
  templateUrl: './selectgender.component.html',
  styleUrls: ['./selectgender.component.scss']
})
export class SelectgenderComponent implements OnInit {
  selectedGender: string = "";
  isSubmitted = false;
  constructor(private interactionService: InteractionService, private router: Router) { }

  ngOnInit() {
  }

  saveGender(form: any) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } if (form.valid) {
      this.selectedGender = form.value.gender;
      this.router.navigate(['/weight']);
      this.interactionService.storeGender(form.value.gender);
    }
  }

}
