import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';




@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule,PasswordModule,CheckboxModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true
})
export class Login implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    isTnC: new FormControl(false, [Validators.requiredTrue])
  })
  isTnCChecked: boolean = false;
  constructor(private router: Router){}
  ngOnInit(){
  }
  registerUser(){
    this.router.navigate(['/registration']);
  }
  loginUser(){
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }
  clicked(){
    console.log("clicked");
  }
}
