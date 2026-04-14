import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  //Signal input
  nombre = input.required<string>();

}

