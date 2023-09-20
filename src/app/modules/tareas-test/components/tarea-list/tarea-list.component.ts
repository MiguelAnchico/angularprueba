import { Component, Input } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.scss'],
})
export class TareaListComponent {
  @Input() tareas!: Tarea[];

  toggleCompleto(tarea: Tarea) {
    tarea.completo = !tarea.completo;
  }

  trackByFn(index: number): number {
    return index;
  }
}
