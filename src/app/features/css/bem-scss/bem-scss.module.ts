import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BemScssComponent } from './bem-scss.component';
import { BemRoutingModule } from './bem-router.module';

@NgModule({
  declarations: [BemScssComponent],
  imports: [CommonModule, BemRoutingModule],
})
export class BemScssModule {}
