import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AilosFooterComponent } from './ailos-footer.component';
@NgModule({
  declarations: [
    AilosFooterComponent
  ],
  exports: [
    AilosFooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AilosFooterModule { }