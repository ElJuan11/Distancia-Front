import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerRequest } from '../auth-module';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private registerUrl = 'http://localhost:3000/users/register';

  constructor(private http: HttpClient) {}

  register(data: registerRequest) {
    return this.http.post(this.registerUrl, data).subscribe(
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
