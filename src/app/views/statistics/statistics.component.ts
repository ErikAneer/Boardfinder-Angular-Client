import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(
              private router: Router,
              private loginservice: AuthenticationService) { }

  ngOnInit() {
    /*
    this.loginservice.checkIfUserLoggedInBackend().subscribe(data => {
    },
    (error) => {
      this.router.navigate(['/login']);
  }
    );*/
  }
}
