import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';
import { Techdetail } from 'src/app/techdetail';
import { TechdetailService } from 'src/app/services/techdetail.service';

@Component({
  selector: 'app-selectshape',
  templateUrl: './selectshape.component.html',
  styleUrls: ['./selectshape.component.scss']
})
export class SelectshapeComponent implements OnInit {
  gender: string = "";
  isSubmitted = false;
  shapes: Techdetail[];
  selectedShape: string = "";
  errorMessage = '';
  constructor(private techdetailService: TechdetailService, private interactionService: InteractionService, private router: Router) { }

  ngOnInit() {
    this.interactionService.usergender$.subscribe(
      message => {
        this.gender = message;
      });
    this.techdetailService.findAllByGender("shape", this.gender).subscribe(data => {
      this.shapes = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    );
  }

  saveShape(form: any) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } if (form.valid) {
      this.selectedShape = form.value.shaperadios;
      this.interactionService.storeShape(this.selectedShape);
      this.router.navigate(['/flex']);
    }
  }

}
