import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  Myform: any;
  Municipio:any;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.Myform = this.createMyForm("");   //INICIALIZA EL SERVIDOR
    this.Municipio=['oaxaca', 'oaxaca'];
  }





  public createMyForm(obj: any) {
    return this.fb.group({
      nombre: [obj.nombre, [Validators.required ,    ]],
      primer_apellido: [obj.primer_apellido, [Validators.required ,]],
      municipio: ['', [Validators.required ,]],
   }
    )};


    public get f() {
      return this.Myform.controls;
    }
  
}
