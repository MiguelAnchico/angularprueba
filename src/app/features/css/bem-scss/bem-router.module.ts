import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemScssComponent } from './bem-scss.component';

const routes: Routes = [
  {
    path: '',
    component: BemScssComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BemRoutingModule {}
