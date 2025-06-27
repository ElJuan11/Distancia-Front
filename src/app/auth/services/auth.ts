import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginRequest, registerRequest } from '../auth-module';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(data: registerRequest) {
    return this.http.post(`${this.backendUrl}/users/register`, data).subscribe(
      {
        next: (res:any) => {
          if(res.id){
            Swal.fire({
            title: 'Registro completado!!',
            text: 'Se ha registrado correctamente',
            icon: 'success',
            confirmButtonText: 'Continuar'
          });
          }
          else{
            Swal.fire({
            title:'Upss!',
            text: 'Verifica tus datos',
            icon: 'warning',
            confirmButtonText: 'Continuar'
          });
          }
          console.log(res)
          return res
        },
        error: (err) => {
          Swal.fire({
            title: 'Upss!',
            text: 'Intenta de nuevo',
            icon: 'warning',
            confirmButtonText: 'Continuar'
          });
          console.error('Error en el registro', err);
        }
      }
    );
  }

  login(data: loginRequest) {
    return this.http.post(`${this.backendUrl}/users/login`, data).subscribe(
      {
        next: (res:any) => {

          console.log(res.message);
          
          if(res.message == "Login successful"){
            Swal.fire({
            title: `¡Bienvenido ${res.user.nombre}!`,
            text: 'Has iniciado sesión correctamente',
            icon: 'success',
            confirmButtonText: 'Continuar'
          });
          }
          else{
            Swal.fire({
            title: 'Upss!',
            text: 'Credenciales incorrectas',
            icon: 'warning',
            confirmButtonText: 'Continuar'
            });
          }
          
          console.log(res)
          return res
        },
        error: (err) => {
          Swal.fire({
            title: 'Upss!',
            text: 'Credenciales incorrectas',
            icon: 'warning',
            confirmButtonText: 'Continuar'
          });
          console.error('Error en el registro', err);
        }
      }
    );
  }


}
