import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tarea-nueva',
  imports: [],
  templateUrl: './tarea-nueva.html',
  styleUrl: './tarea-nueva.css',
})
export class TareaNueva {

  @Output() cancelar = new EventEmitter<void>();

  alCancelar() {
    this.cancelar.emit();
  }

}
