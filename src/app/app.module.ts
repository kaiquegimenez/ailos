import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpfQueryComponent } from './cpf-query/cpf-query.component';
import { AilosButtoModule } from './shared/components/ailos-button/alios-button.module';
import { AilosInputModule } from './shared/components/ailos-input/ailos-input.moule';
import { AilosCardModule } from './shared/components/ailos-card/ailos-card.module';
import { AilosHeaderModule } from './shared/components/ailos-header/ailos-header.module';
import { AilosMenuModule } from './shared/components/ailos-menu/ailos-menu.module';
import { AilosFooterModule } from './shared/components/ailos-footer/ailos-footer.module';
import { AilosStepperModule } from './shared/components/ailos-stepper/ailos-stepper.module';
import { AilosToastModule } from './shared/components/ailos-toast/ailos-toast.module';
@NgModule({
  declarations: [
    AppComponent,
    CpfQueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AilosButtoModule,
    AilosInputModule,
    AilosCardModule,
    AilosHeaderModule,
    AilosMenuModule,
    AilosFooterModule,
    AilosStepperModule,
    AilosToastModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
