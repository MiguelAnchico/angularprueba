import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-router.module';
import { AngularComponent } from './angular.component';

@NgModule({
  declarations: [AngularComponent],
  imports: [CommonModule, AngularRoutingModule],
})
export class AngularModule {}
