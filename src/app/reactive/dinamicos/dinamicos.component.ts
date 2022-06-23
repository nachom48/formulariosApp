import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  nuevoFavorito : FormControl =this.fb.control('',Validators.required)


  constructor(private fb:FormBuilder) { }

  get FavoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;

  }
  miFormulario: FormGroup =this.fb.group({
    name:['',[Validators.minLength(3),Validators.required]],
    favoritos:this.fb.array([
      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required]],Validators.required
    )
  })

    validarCampo(campo:string){
      return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
    }
    guardar(){
      if (this.miFormulario.invalid){
        this.miFormulario.markAllAsTouched()
              }

      console.log(this.miFormulario.value)
      this.miFormulario.reset()
    }


    agregarCampo(){
      console.log("estoy entrando aca")
      if (this.nuevoFavorito.invalid){return}
      this.FavoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required))
      this.nuevoFavorito.reset()
    }
    borrar(i:number){
      return this.FavoritosArr.removeAt(i)
    }


  ngOnInit(): void {
  }

}
