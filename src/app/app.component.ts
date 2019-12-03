import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //template: <app-selectshoesize (saveShoeSizeToParent)="saveShoeSizeValue($event)"></app-selectshoesize>
   //         <app-selectgendercomponent (saveGenderToParent)="saveSelectedValue($event)"></app-selectgendercomponent>

})
export class AppComponent implements OnInit {
  title: string;
  welcomeMessage: string;
  routerString: string;

  constructor(private router: Router) {
    this.title = 'Spring Boot Board Test- Angular Application';
    this.welcomeMessage = 'Welcome to the board finder app!';
    this.routerString = router.url;
   }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

  public gender;
  public riderWeight;
  public shoeSize;
  public riderLevel;
  public preferredTerrain;
  public bend;
  public shape;
  public flex;
  

  saveShoeSizeValue($event) {
    this.shoeSize = $event;
    console.log('Shoesize' + this.shoeSize);
  }

  saveGenderValue($event) {
    this.gender = $event;
    console.log('The gender is: ' + this.gender);
  }

}
