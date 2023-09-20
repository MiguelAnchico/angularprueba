import { Component, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../tarea-list/models/tarea.model';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.scss'],
})
export class TareaFormComponent {
  @Output() tareaCreada = new EventEmitter<Tarea>();

  nuevaTarea: Tarea = { descripcion: '', completo: false };

  agregarTarea() {
    this.tareaCreada.emit({ ...this.nuevaTarea });
    this.nuevaTarea.descripcion = '';
  }
}
