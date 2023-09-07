import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../models/fattura.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { InvoiceService } from '../services/invoices/invoice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-elenco-fatture',
  templateUrl: './elenco-fatture.component.html',
  styleUrls: ['./elenco-fatture.component.css'],
})
export class ElencoFattureComponent implements OnInit {
  filterForm: FormGroup;
  dateRangeForm: FormGroup;
  fattureUnfiltered: Fattura[] = [];
  fatture: Fattura[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar
  ) {
    this.dateRangeForm = this.fb.group({
      start: [this.getDefaultDate(-1)],
      end: [this.getDefaultDate(+1)],
    });

    this.filterForm = this.fb.group({
      numero: [''],
      sdi: [''],
      destinatario: [''],
      dateRange: this.dateRangeForm,
    });
  }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(): void {
    this.invoiceService.getInvoices().then((data: Fattura[]) => {
      this.fattureUnfiltered = data;
      this.fatture = data;
      this.snackBar
        .open('Elenco Fatture Aggiornato', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        })
        .afterDismissed()
        .subscribe(() => {});
    });
  }

  private getDefaultDate(yearsToAdd: number): string {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + yearsToAdd);
    return currentDate.toISOString().slice(0, 10); // Format as 'YYYY-MM-DD'
  }

  onDateChange(controlName: string, event: MatDatepickerInputEvent<Date>) {
    this.filterForm.get(controlName)?.setValue(event.value);
  }

  applicaFiltro() {
    this.fatture = this.fattureUnfiltered.filter((fattura) => {
      let isValid = true;
      if (this.filterForm.get('numero')?.value) {
        isValid &&=
          fattura.invoice_number ===
          parseInt(this.filterForm.get('numero')?.value);
      }
      if (this.filterForm.get('sdi')?.value) {
        isValid &&=
          fattura.sdi_identifier === this.filterForm.get('sdi')?.value;
      }
      if (this.filterForm.get('destinatario')?.value) {
        isValid &&= fattura.destination_full_name.includes(
          this.filterForm.get('destinatario')?.value
        );
      }
      // // Check if the date range is selected
      // const startDate = this.dateRangeForm.get('start')?.value;
      // const endDate = this.dateRangeForm.get('end')?.value;

      // // Check if the issue_date falls within the selected date range
      // if (startDate && endDate) {
      //   // Convert issue_date and due_date to Date objects
      //   const dataEmissione = new Date(fattura.issue_date);
      //   const dataScadenza = new Date(fattura.due_date);
      //   console.log(startDate + '-' + dataEmissione);

      //   isValid &&= dataEmissione >= startDate && dataScadenza <= endDate;
      // }
      return isValid;
    });
  }

  refreshInvoices(): void {
    // Call this method to refresh the list of invoices
    this.getInvoices();
  }

  getXmlFileUrl(invoice_number: number) {
    this.invoiceService.getInvoiceXML(invoice_number).then((url) => {
      window.open(url, '_blank');
    });
  }

  navigateToAggiungiFattura(): void {
    this.router.navigate(['/aggiungi-fattura']);
  }
  navigateToDettaglioFattura(invoiceNumber: number): void {
    this.router.navigate(['/dettaglio-fattura', invoiceNumber]);
  }
}
