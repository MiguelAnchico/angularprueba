import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: 'html',
    loadChildren: () =>
      import('./features/html/html.module').then((m) => m.HtmlModule),
  },
  {
    path: 'css',
    loadChildren: () =>
      import('./features/css/css.module').then((m) => m.CssModule),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('./features/javascript/javascript.module').then(
        (m) => m.JavascriptModule
      ),
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./features/angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: 'angular/1',
    loadChildren: () =>
      import('./modules/components-test/components-test.module').then(
        (m) => m.ComponentsTestModule
      ),
  },
  {
    path: 'angular/2',
    loadChildren: () =>
      import('./modules/directivas-test/directivas-test.module').then(
        (m) => m.DirectivasTestModule
      ),
  },
  {
    path: 'angular/3',
    loadChildren: () =>
      import('./modules/reactive-form-test/reactive-form-test.module').then(
        (m) => m.ReactiveFormTestModule
      ),
  },
  { path: '**', redirectTo: 'html' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
