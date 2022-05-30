import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpfQueryComponent } from './cpf-query/cpf-query.component';

const routes: Routes = [
  {
    path: 'cpfQuery',
    component: CpfQueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
