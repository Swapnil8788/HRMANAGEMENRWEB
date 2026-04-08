import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';



@Component({
  selector: 'app-registration',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, PasswordModule, CheckboxModule, FormsModule, MultiSelectModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
  standalone: true
})
export class Registration {
  registerForm: FormGroup;
  roleOptions: any[] = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Employee', value: 'Employee' },
    { label: 'Manager', value: 'Manager' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required,   ]],
      phoneNo: ['', Validators.required],
      age: ['', Validators.required],
      roles: [[], Validators.required],
      isTnC: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirm')?.value
      ? null : { passwordMatchValidator: true };
  }

  addRole(role: string) {
    if (!role) return;

    const roles = this.registerForm.get('roles')?.value || [];
    roles.push(role);
    this.registerForm.get('roles')?.setValue(roles);
  }

    loginUser(){
      this.router.navigate(['/login']);

    }
  registerUser() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/login']);
  

    console.log(this.registerForm.value);
  }
}
