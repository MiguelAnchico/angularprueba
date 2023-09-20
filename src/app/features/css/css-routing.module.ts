import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';

const routes: Routes = [
  {
    path: '',
    component: CssComponent,
  },
  {
    path: 'bem',
    loadChildren: () =>
      import('./bem-scss/bem-scss.module').then((m) => m.BemScssModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssRoutingModule {}
