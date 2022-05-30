import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosToastComponent } from './ailos-toast.component';
@NgModule({
  declarations: [
    AilosToastComponent
  ],
  exports: [
    AilosToastComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AilosToastModule { }