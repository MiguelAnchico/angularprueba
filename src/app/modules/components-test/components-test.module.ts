import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsTestComponent } from './components-test.component';
import { ComponentsTestRoutingModule } from './components-test-router.module';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ContadorComponent } from './components/contador/contador.component';

@NgModule({
  declarations: [ComponentsTestComponent, SaludoComponent, ContadorComponent],
  imports: [CommonModule, ComponentsTestRoutingModule],
})
export class ComponentsTestModule {}
