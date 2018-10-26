import { Component, OnInit } from '@angular/core';
import {ngForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: Object = {

    nombre: "fernando",
    apellido: "lagos",
    correo: ""
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: ngForm){

    console.log("ngform",forma);
    console.log("valor forma",forma.value);
    console.log("usuario", this.usuario);
  }

}
