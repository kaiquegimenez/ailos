import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosMenuComponent } from './ailos-menu.component';
import { AilosInputModule } from '../ailos-input/ailos-input.moule';
@NgModule({
  declarations: [
    AilosMenuComponent,
  ],
  exports: [
    AilosMenuComponent
  ],
  imports: [
    BrowserModule,
    AilosInputModule
  ],
  providers: [],
})
export class AilosMenuModule { }