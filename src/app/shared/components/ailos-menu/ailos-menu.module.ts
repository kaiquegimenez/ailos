import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosMenuComponent } from './ailos-menu.component';
@NgModule({
  declarations: [
    AilosMenuComponent
  ],
  exports: [
    AilosMenuComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AilosMenuModule { }