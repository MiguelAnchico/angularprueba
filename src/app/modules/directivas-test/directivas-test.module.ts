import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasTestComponent } from './directivas-test.component';
import { DirectivasTestRoutingModule } from './directivas-test-router.module';
import {
  ApplyStylesDirective,
  TransformStringDirective,
} from 'src/app/shared/directives';

@NgModule({
  declarations: [
    DirectivasTestComponent,
    ApplyStylesDirective,
    TransformStringDirective,
  ],
  imports: [CommonModule, DirectivasTestRoutingModule],
})
export class DirectivasTestModule {}
