import { Component } from '@angular/core';
import { CallbackService } from './services/invoices/callback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fatturearuba-fe';
  isAccordionOpen: boolean = false;
  constructor(private callbackService: CallbackService) {}

  requestNotification() {
    // Esegui la richiesta al server Django
    this.callbackService.sendNotification({ event: 'event_data' }).subscribe(
      (response) => {
        // Elabora la risposta in base alle tue esigenze
        console.log('Notifica inviata con successo');
      },
      (error) => {
        console.error("Errore nell'invio della notifica", error);
      }
    );
  }
}

//la callback deve essere change status ogni volta che viene chimata invia la notification ad angular
