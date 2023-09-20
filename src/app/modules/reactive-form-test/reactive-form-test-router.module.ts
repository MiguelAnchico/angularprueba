import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormTestComponent } from './reactive-form-test.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormTestComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormTestRoutingModule {}
