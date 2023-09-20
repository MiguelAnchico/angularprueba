import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { CssRoutingModule } from './css-routing.module';

@NgModule({
  exports: [CssComponent],
  imports: [CommonModule, CssRoutingModule],
  declarations: [CssComponent],
})
export class CssModule {}
