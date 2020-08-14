import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InformacionService } from '../informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private informacionService: InformacionService, private router: Router) {
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

  async onSubmit() {
    const response = await this.informacionService.agregarPost(this.formulario.value);
    console.log(response);
    this.router.navigate(['/blog']);
  }

}