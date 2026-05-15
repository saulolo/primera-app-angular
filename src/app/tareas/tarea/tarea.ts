import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { type ObjetoTarea } from './tarea.model';

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  tarea = input.required<ObjetoTarea>();
  @Output() terminada = new EventEmitter<string>;

  alCompletarTarea() {
    this.terminada.emit(this.tarea().id);
  }
}
