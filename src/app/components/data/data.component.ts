import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {



  forma: FormGroup;
  usuario: Object = {

    nombrecompleto:{
      nombre:"fernando",
      apellido:"herrera"
    },
    correo: "fern.@gmail.com",
    pasatiempos:["correr","dormir","comer"]
  };


  constructor() {
      this.forma = new FormGroup({
        'nombre': new FormControl('',[Validators.required,Validators.minLength(3)]),
        'apellido': new FormControl('',[Validators.required, this.noHerrera]),
        'correo': new FormControl('', [
          Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),

          'pasatiempos': new FormArray([
            new FormControl('correr', Validators.required)
          ]),
          'username': new FormControl('', Validators.required,this.existeUsuario),
          'password1': new FormControl('', Validators.required),
          'password2': new FormControl()

      });
      this.forma.controls['password2'].setValidators([
        Validators.required,
        this.noIgual.bind( this.forma )
      ]);
      //observador que este pendiente de los cambios
      this.forma.controls['username'].valueChanges
      .subscribe(data =>{
        console.log(data);
      });

      //status del control
      this.forma.controls['username'].statusChanges
      .subscribe(data =>{
        console.log(data);
      });


   }



agregarPasatiempo(){
( <FormArray> this.forma.controls['pasatiempos']).push(
  new FormControl('', Validators.required)
))
}

noHerrera(control:FormControl): any{
  if(control.value=== "herrera"){
    return {noherrera: true }
  }
  return null;
}

noIgual(control: FormControl): any{

  const forma: any = this;

  if (control.value !== forma.controls['password1'].value){
    return {noiguales: true };
  }
  return null;
}

existeUsuario(control: FormControl): Promise<any>|Observable<any>{
  let promesa = new Promise(
    (resolve, reject)=>{
      setTimeout(() => {
        if(control.value==="strider"){
          resolve({existe:true})
        }else{
          resolve(null)
        }

      }, 3000);

    }
  );
return promesa;
}

guardarCambios() {
  console.log(this.forma.value);
}

}
