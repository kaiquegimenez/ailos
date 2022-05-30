import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AilosInputComponent } from './ailos-input.component';
@NgModule({
  declarations: [
    AilosInputComponent
  ],
  exports: [
    AilosInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
})
export class AilosInputModule { }