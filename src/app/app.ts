import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('primera-app-angular');
}
