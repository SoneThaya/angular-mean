import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  isLoading = false;

  onSignup(form: NgForm) {
    console.log(form.value);
  }
}
