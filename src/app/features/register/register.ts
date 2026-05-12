import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { Authentication } from '../../core/services/authentication';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  standalone: true
})
export class Register {

  form: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);

  authenticationService: Authentication = inject(Authentication);

  constructor() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.requiredTrue]],
      acceptTerms: ['', [Validators.requiredTrue]]
    });

    this.form.valueChanges.subscribe((values) => {
      console.log('errors: ', this.form.errors);
    })

  }

  validateConfirmPassword() {

  }

  createAccount() {

  }

}
