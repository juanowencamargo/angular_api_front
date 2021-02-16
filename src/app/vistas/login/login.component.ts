import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { loginIni } from '../../modelos/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)

  });
  constructor( private api:ApiService) { }

  ngOnInit(): void {
  }

  onLogin(form: loginIni){
      console.log("form= ",this.loginForm.value);
    // this.api.loginByEmail(form).subscribe(data => {
    //   console.log(data);
    // });
  }

}
