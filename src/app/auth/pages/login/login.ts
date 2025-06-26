import { CommonModule } from "@angular/common";
import {Component} from "@angular/core";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule ] ,
  templateUrl: './login.html',
  styleUrl: './login.css'


})
export class Login {



nocontrol :string =  ""
Password :string =  ""


onLogin(){
  const datos ={
    noControl: this.nocontrol,
    Password:  this.Password,
  };

  console.log("Objeto:", datos ); // como objeto 
}
}

