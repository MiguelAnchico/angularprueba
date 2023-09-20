import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasTestComponent } from './tareas-test/tareas-test.component';
import { TareaListComponentComponent } from './components/tarea-list-component/tarea-list-component.component';



@NgModule({
  declarations: [
    TareasTestComponent,
    TareaListComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TareasTestModule { }
