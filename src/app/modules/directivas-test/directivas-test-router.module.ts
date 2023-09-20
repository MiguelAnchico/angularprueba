import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivasTestComponent } from './directivas-test.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivasTestComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasTestRoutingModule {}
