import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ]
})
export class AuthModule { }

export interface registerRequest {
  nombre: string;
  apellidos: string;
  edad: string;
  sexo: string;
  localidad: string;
  numTel: string;
  correo: string;
  ocupacion: string;
  password: string;
}

