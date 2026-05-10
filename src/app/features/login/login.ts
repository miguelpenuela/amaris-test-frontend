import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  
  form: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.form.valueChanges.subscribe((value) => {
      console.log('value changes: ', value);
    })
  }

  login() {
    console.log('Login: ', this.form.value);
  }
}
