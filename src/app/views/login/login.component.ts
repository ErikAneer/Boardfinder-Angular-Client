import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  invalidLogin = false
  errorMessage = '';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  login: Boolean  = false;


  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  get f() { return this.loginForm.controls; }

  async onSubmit() {
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
      this.errorMessage = "error";
      //this.errorMessage = error.message;
    }
    )
    );
  }
}
