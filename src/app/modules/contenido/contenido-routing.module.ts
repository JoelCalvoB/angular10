import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltrosComponent } from './pages/filtros/filtros.component';

const routes: Routes = [
  {path:'' , children:[
    {path:'filtros' , component: FiltrosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
