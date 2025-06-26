import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginRequest, registerRequest } from '../auth-module';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(data: registerRequest) {
    return this.http.post(`${this.backendUrl}/users/register`, data).subscribe(
      {
        next: (res) => {
          console.log(res)
          return res
        },
        error: (err) => {
          console.error('Error en el registro', err);
        }
      }
    );
  }

  login(data: loginRequest) {
    return this.http.post(`${this.backendUrl}/users/login`, data).subscribe(
      {
        next: (res) => {
          console.log(res)
          return res
        },
        error: (err) => {
          console.error('Error en el registro', err);
        }
      }
    );
  }


}
