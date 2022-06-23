import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
constructor(private fb:FormBuilder){
}

miFormulario:FormGroup=this.fb.group({
  name          :['',[Validators.minLength(3),Validators.required]],
  precio        :[0,[Validators.required,Validators.min(0)]],
  existencias   :[0,[Validators.required,Validators.min(0)]]
})


// }
// miFormulario : FormGroup = new FormGroup({
//   name        :new FormControl('RTX 4080'),
//   precio      :new FormControl('0'),
//   existencias :new FormControl('')
// })


validarCampos(campo:string){
  return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
}

guardar(){
  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched();
    return
  }
  this.miFormulario.reset()
}
}
