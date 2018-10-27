import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }

  `
  ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {

    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  };

  paises = [{
    codigo: "cri",
    nombre: "costa rica"},
    {
    codigo: "esp",
    nombre: "españa"

  }];

  sexos: string[] = ["Hombre","Mujer","sin definir"]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm){

    console.log("ngform",forma);
    console.log("valor forma",forma.value);
    console.log("usuario", this.usuario);
  }

}
