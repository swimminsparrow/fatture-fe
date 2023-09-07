import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoFattureComponent } from './elenco-fatture/elenco-fatture.component';
import { FiltroFatturePipe } from './elenco-fatture/filtro-fatture.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AggiungiFatturaComponent } from './aggiungi-fattura/aggiungi-fattura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DettaglioFatturaComponent } from './dettaglio-fattura/dettaglio-fattura.component';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    ElencoFattureComponent,
    FiltroFatturePipe,
    AggiungiFatturaComponent,
    DettaglioFatturaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
