import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { Authentication } from '../../core/services/authentication';
import { ICreateCustomer } from '../../core/interfaces/request/CreateCustomer.interface';

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

  authServices: Authentication = inject(Authentication);
  router: Router = inject(Router);

  constructor() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [false, [Validators.requiredTrue]],
      acceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  validateConfirmPassword(event: any) {
    console.log('validateConfirmPassword:', event.target.value);
    const password = this.form.get('password')?.value;
    const confirmPasswordValue =  event.target.value;
    this.form.get('confirmPassword')?.setValue(password === confirmPasswordValue);
  }

  async createAccount() {
    console.log('createAccount...');
    try {
      const body = await this.buildBody();
      await this.authServices.register(body);
      await this.authServices.login({username: body.customer.email, password:body.password});
      this.router.navigate(['/app/home']);
    } catch (error) {
      console.log('createAccount.error: ', error); 
    }
  }

  buildBody(): ICreateCustomer {
    const {name, surname, email, password } = this.form.value;
    const body: ICreateCustomer = {
      customer: {
        city_id: 167,
        name,
        email,
        surname
      },
      password 
    }
    return body;
  }

}
