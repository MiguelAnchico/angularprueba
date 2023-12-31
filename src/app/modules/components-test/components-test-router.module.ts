import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsTestComponent } from './components-test.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsTestComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsTestRoutingModule {}
