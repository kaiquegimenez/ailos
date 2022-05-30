import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosHeaderComponent } from './ailos-header.component';
@NgModule({
  declarations: [
    AilosHeaderComponent
  ],
  exports: [
    AilosHeaderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AilosHeaderModule { }