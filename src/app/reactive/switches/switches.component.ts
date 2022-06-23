import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario:FormGroup = this.fb.group({
    genero:['',Validators.required],
    notificaciones:[false,Validators.required],
    condiciones:[false,Validators.requiredTrue]

  })
  persona={
    genero:['F'],
    notificaciones:[true,Validators.required],
  }



  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.miFormulario.reset({...this.persona,
                            condiciones:true});
    this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue=>{
      console.log(newValue)
    })
    this.miFormulario.valueChanges.subscribe(form=>{
      delete form.condiciones;

    })
  }

    guardar(){
      const formValue={...this.miFormulario.value}
      delete formValue.condiciones;
      this.persona=formValue;
    }

}
