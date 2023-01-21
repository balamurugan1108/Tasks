import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // required: any;
  // pattern: any;

  model = {
    email: '',
    password: '',
  };


  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
