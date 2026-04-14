import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  //Con decorador Input
  @Input({ required: true }) id!:string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) nombre!: string;
 // @Output() seleccion = new EventEmitter<string>();

  //Con Signals
  avatar = input.required<string>();
  nombre = input.required<string>();
  seleccion = output<string>();

  /*  get rutaImagen() {
    return `/assets/usuarios/${this.avatar}`;
  }*/

  rutaImagen = computed(() => {
    return `/assets/usuarios/${this.avatar()}`;
  });

  alSeleccionarUsuario() {
    this.seleccion.emit(this.id);
  }
}
