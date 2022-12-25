import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './layout/inicio/inicio/inicio.component';

const routes: Routes = [{
  path:'inicio', component:InicioComponent , loadChildren:() => import('./modules/contenido/contenido.module').then(m => m.ContenidoModule)}

  ,{path:'',redirectTo:'/inicio/filtros', pathMatch: 'full' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
