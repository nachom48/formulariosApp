import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Persona{
  name:string,
  favoritos:Favorito[]
}
interface Favorito{
  id:number,
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})

export class DinamicosComponent{
@ViewChild('miFormulario') miFormulario!:NgForm;

nuevoJuego:string=''
  persona : Persona = {
    name:"Fernando",
    favoritos:[{
      id:1,nombre:'Metal Gear'
    },
  {
    id:2,nombre:'DeathStranding'
  }]
  }
  eliminar(i:number){
    this.persona.favoritos.splice(i,1)
  }

  guardar(){
    console.log('Formulario Posteado')
  }
  agregarJuego(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego=''
  }
}
