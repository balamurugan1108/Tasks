import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public model = {
    firstName:'',
    lastName:'',
    email: '',
    password: '',
    mobile:'',
    confirm:''
  };

  public onSubmit(form:any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
