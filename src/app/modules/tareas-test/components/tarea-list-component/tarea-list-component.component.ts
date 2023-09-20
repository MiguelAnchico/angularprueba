import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-tarea-list-component',
  templateUrl: './tarea-list-component.component.html',
  styleUrls: ['./tarea-list-component.component.scss'],
})
export class TareaListComponentComponent {
  @Input() tareas!: Tarea[];

  toggleCompleto(tarea: Tarea) {
    tarea.completo = !tarea.completo;
  }

  trackByFn(index: any) {
    return index;
  }
}
