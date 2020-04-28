import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    // Empty subscribe in order to make the logout call to be done. 
    // Then clear session.
    this.authentocationService.logOut().subscribe(data => {
    } , error => {
    }
    );
    this.authentocationService.clearSession();
    this.router.navigate(['home']);
  }

}