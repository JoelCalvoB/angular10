import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FiltrosComponent],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]   
})
export class ContenidoModule { }
