import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

interface User {
  id: string;
  avatar: string;
  nombre: string;
}

/*type User = {
  id: string;
  avatar: string;
  nombre: string;
}*/

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  //Con decorador Input
  @Input({ required: true }) usuario!: User;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) nombre!: string;
  //@Output() seleccion = new EventEmitter<string>();

  //Con Signals
  //avatar = input.required<string>();
  //nombre = input.required<string>();
  seleccion = output<string>();

  /*  get rutaImagen() {
    return `/assets/usuarios/${this.avatar}`;
  }*/

  rutaImagen = computed(() => {
    return `/assets/usuarios/${this.usuario.avatar}`;
  });

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
