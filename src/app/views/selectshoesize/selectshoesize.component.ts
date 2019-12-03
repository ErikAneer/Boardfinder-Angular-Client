import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Shoesize } from '../../shoesize';
import { ShoesizeService } from '../../services/shoesize.service';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectshoesize',
  templateUrl: './selectshoesize.component.html',
  styleUrls: ['./selectshoesize.component.scss']
})
export class SelectshoesizeComponent implements OnInit {
  isSubmitted = false;
  shoesizes: Shoesize[];
  errorMessage = '';
  constructor(private shoesizeservice: ShoesizeService, private interactionService: InteractionService, private router: Router) { }

  ngOnInit() {
    this.shoesizeservice.findAll().subscribe(data => {
      this.shoesizes = data;
    },
    (error) => {
      this.errorMessage = error.message; 
  }
    
    );
  }

  selectedSize: number;

  public saveShoeSize(form: any) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } if (form.valid) {
      this.selectedSize = form.value.size;
      this.interactionService.storeShoeSize(form.value.size);
      this.router.navigate(['/riderlevel']);
    }
  }
}
