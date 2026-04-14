import { Component, computed, output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Usuario } from './usuario/usuario';
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { Tareas } from './tareas/tareas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, Usuario, Tareas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado = signal('u1');

  usuarioSeleccionado = computed(() =>
    this.usuarios.find((u) => u.id === this.idUsuarioSeleccionado()),
  );

  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado.set(id);
  }
}
