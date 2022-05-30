import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosCardComponent } from './ailos-card.component';
@NgModule({
  declarations: [
    AilosCardComponent
  ],
  exports: [
    AilosCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AilosCardModule { }