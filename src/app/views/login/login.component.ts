import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first, delay } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  //username = 'javainuse'
  //password = ''
  invalidLogin = false
  errorMessage = '';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  login: Boolean  = false;


  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private formBuilder: FormBuilder,
    private userservice: UserService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  get f() { return this.loginForm.controls; }

  /*
    async  onSubmit() {
      this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
    
   this.login  = await  this.loginservice.authenticate(this.f.username.value, this.f.password.value);      
   if (this.login )
     {
      console.log("entered true in auth service")      
      this.invalidLogin = false

    } else
    console.log("entered false in auth service")
      this.invalidLogin = true
      this.loading = false;
      this.submitted = false;
      this.loginForm.reset();
      this.errorMessage = "error";


  }
*/
  async onSubmit() {
    this.userservice.testUserService(this.f.username.value, this.f.password.value).subscribe(async data => {
      this.answer = data;

    if (this.f.username.value == this.answer) {
      sessionStorage.setItem('username', this.f.username.value);
      
      this.loggedin = true;
      this.invalidLogin = false
      this.router.navigate(['/statistics']);
    } else {
      this.loggedin = false;
      this.invalidLogin = true
      this.loading = false;
      this.submitted = false;
      this.loginForm.reset();
      this.errorMessage = "error";
    }

    },
      (error) => {
        this.errorMessage = error.message;
      }


    );
    }
}
