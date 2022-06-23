import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
@ViewChild('miFormulario') miFormulario!:NgForm;
  constructor() { }
  initialForm={
    producto:'',
    precio:0,
    existencia:0
  }
  ngOnInit(): void {
  }
  guardar(){
    this.miFormulario.resetForm();
    console.log(this.miFormulario.value)

  }
  validarNombre():Boolean{
    return this.miFormulario?.form.controls['producto']?.invalid &&
    this.miFormulario?.form.controls['producto']?.touched ;

  }
  validarPrecio(){
    return (this.miFormulario?.form.controls['price'].value<0 && this.miFormulario?.form.controls['price'].touched);
  }

}
