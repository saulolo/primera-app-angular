import { Component, input, Input } from '@angular/core';
import { type ObjetoTarea } from './tarea.model';

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  tarea = input.required<ObjetoTarea>();
}
