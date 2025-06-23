import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

const routes: Routes = [
  {
    path: '',  // Ruta base del módulo (ej: /nombre-del-modulo)
    children: [
      { path: 'login', component: Login },  // /nombre-del-modulo/hijo1
      { path: 'register', component: Register },  // /nombre-del-modulo/hijo2
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
