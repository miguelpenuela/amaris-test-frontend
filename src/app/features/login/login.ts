import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { Authentication } from '../../core/services/authentication';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  
  form: FormGroup;
  formBuilder = inject(FormBuilder);

  private authenticationService: Authentication = inject(Authentication);
  private router: Router = inject(Router);

  constructor() {
    this.form = this.formBuilder.group({
      username: ['felipegarxon@hotmail.com', [Validators.required, Validators.email]],
      password: ['miclave123', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.authenticationService.logout();
  }

  async login() {
    const result = await this.authenticationService.login(this.form.value);
    // console.log('Login.result: ', result);
    this.router.navigate(['/app/home']);
  }
}
