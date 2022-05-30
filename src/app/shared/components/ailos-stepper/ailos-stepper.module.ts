import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosStepperComponent } from './ailos-stepper.component';
@NgModule({
  declarations: [
    AilosStepperComponent
  ],
  exports: [
    AilosStepperComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AilosStepperModule { }