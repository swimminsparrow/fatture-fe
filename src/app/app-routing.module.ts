import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioFatturaComponent } from './dettaglio-fattura/dettaglio-fattura.component';
import { ElencoFattureComponent } from './elenco-fatture/elenco-fatture.component';
import { AggiungiFatturaComponent } from './aggiungi-fattura/aggiungi-fattura.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'elenco-fatture',
    //pathMatch: 'full',
    component: ElencoFattureComponent,
  },
  {
    path: 'dettaglio-fattura/:invoice_number',
    component: DettaglioFatturaComponent,
  },
  {
    path: 'aggiungi-fattura',
    component: AggiungiFatturaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
