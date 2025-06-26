import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerRequest } from '../../auth-module';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
  
})

export class Register { 
  formData: registerRequest = {
    nombre: '',
    apellidos: '',
    edad: '0',
    sexo: '',
    localidad: '',
    numTel: '000000',
    correo: '',
    ocupacion: '',
    password: ''
  };

    constructor(private authService: Auth) {}

 onRegister() {
 console.log("Objeto:", this.formData);  // Imprimir como objeto
    console.log("JSON:", JSON.stringify(this.formData));  // Imprimir como JSON string

    const respuesta = this.authService.register(this.formData)
  }
}