import { Component } from '@angular/core';
import { InvoiceService } from '../services/invoices/invoice.service';
import { Router } from '@angular/router'; // Import Router for navigation
import { Fattura } from '../models/fattura.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-aggiungi-fattura',
  templateUrl: './aggiungi-fattura.component.html',
  styleUrls: ['./aggiungi-fattura.component.css'],
})
export class AggiungiFatturaComponent {
  fattura: Fattura = {
    issue_date: '2023-09-15',
    due_date: '2023-10-15',
    emitter_full_name: 'John Doe',
    emitter_email: 'john@example.com',
    destination_full_name: 'Alice Smith',
    destination_email: 'alice@example.com',
    total_amount: 100.5,
    status: 'Inviata',
    emitter_user: 1,
    destination_user: 2,
  } as Fattura;

  selectedFile: File | undefined;

  constructor(
    private router: Router,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile = inputElement.files?.[0];
  }

  onSubmit(): void {
    this.invoiceService.addInvoice(this.fattura).then(
      (response) => {
        console.log(response);
        this.invoiceService
          .uploadInvoiceXML(response.invoice_number, this.selectedFile)
          .then(() => {
            console.log('Invoice added:', response);
            this.fattura = {} as Fattura;
            this.snackBar
              .open('Hai Aggiunto una nuova fattura', 'Close', {
                duration: 3000,
                panelClass: ['success-snackbar'],
              })
              .afterDismissed()
              .subscribe(() => {
                this.router.navigate(['/elenco-fatture']);
              });
          });
      },
      (error) => {
        console.error('Error adding invoice:', error);
      }
    );
  }
}
