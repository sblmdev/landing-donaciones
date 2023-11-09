import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Tarjeta1ComponenteComponent } from './tarjeta1-componente/tarjeta1-componente.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'pago', component: Tarjeta1ComponenteComponent },
{ path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige al inicio por defecto
{ path: '**', redirectTo: '/inicio' }, // Maneja rutas no encontradas];
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
