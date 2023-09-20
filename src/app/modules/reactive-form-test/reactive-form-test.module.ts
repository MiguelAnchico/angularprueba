import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormTestComponent } from './reactive-form-test.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormTestRoutingModule } from './reactive-form-test-router.module';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    ReactiveFormTestComponent,
    DataBindingComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormTestRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ReactiveFormTestModule {}
