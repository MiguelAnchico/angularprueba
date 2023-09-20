import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRestricted } from './shared/directives/restricted.directive';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AppRestricted],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
