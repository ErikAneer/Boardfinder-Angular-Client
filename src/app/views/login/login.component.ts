import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserDto } from 'src/app/userdto';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  invalidLogin = false
  errorMessage = '';
  errorTitle = '';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  login: Boolean  = false;
  user:UserDto;
  role:string;
  notFocused = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private formBuilder: FormBuilder,
    private interactionService: InteractionService
    ) { }

  ngOnInit() {
    this.interactionService.errorMessage$.subscribe(
      message => {
        this.errorMessage = message;
      });;
    this.interactionService.errorTitle$.subscribe(
      message => {
        this.errorTitle = message;
      });;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.interactionService.storeErrorTitle("");
    this.interactionService.storeErrorMessage("");
    (this.loginservice.authenticate(this.f.username.value, this.f.password.value).subscribe(data => {
      this.answer = data;
      this.invalidLogin = false
      this.router.navigate(['/statistics']);
    } , error => {
      this.loggedin = false;
      this.invalidLogin = true
      this.loading = false;
      this.submitted = false;
      this.loginForm.reset();
      this.errorTitle = "Ooops...";
      this.errorMessage = "It seems like the login credentials are bad. Please try again!";
    }
    )
    );
  }
  setErrorMessage(error: string) {
    this.errorMessage = error;
  }
}
