import { Component, Input, input, output, signal } from '@angular/core';
import { Tarea } from './tarea/tarea';
import { TareaNueva } from './tarea-nueva/tarea-nueva';

@Component({
  selector: 'app-tareas',
  imports: [Tarea, TareaNueva],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  idUsuario = input.required<string>();
  //Signal input
  nombre = input.required<string>();
  estaAgregandoTareaNueva = signal(false);

  tareasFalses = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2026-10-10',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2026-11-15',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2026-12-24',
    },
  ];

  get tareasUsuarioSeleccionado() {
    return this.tareasFalses.filter((tarea) => tarea.idUsuario === this.idUsuario());
  }

  alCompletarTarea(id: string) {
    this.tareasFalses = this.tareasFalses.filter((tarea) => tarea.id !== id);
  }

  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva.update(v => !v);
  };

  alCancelarNuevaTarea() {
    this.estaAgregandoTareaNueva.update(v => !v);
  };
}

