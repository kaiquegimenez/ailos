import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosButtonComponent } from './ailos-button.component';

@NgModule({
  declarations: [
    AilosButtonComponent
  ],
  exports: [
    AilosButtonComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AilosButtoModule { }