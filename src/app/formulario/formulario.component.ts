import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

}
