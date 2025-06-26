import { CommonModule } from "@angular/common";
import {Component} from "@angular/core";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { Auth } from "../../services/auth";
import { loginRequest } from "../../auth-module";


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule ] ,
  templateUrl: './login.html',
  styleUrl: './login.css'


})
export class Login {

  constructor(
    private authService:Auth
  ){}


nocontrol :string =  ""
Password :string =  ""


 onLogin(){
  const datos: loginRequest ={
    correo: this.nocontrol,
    password:  this.Password,
  };

  const respuesta =  this.authService.login(datos)
  console.log(respuesta);
  

}
}

