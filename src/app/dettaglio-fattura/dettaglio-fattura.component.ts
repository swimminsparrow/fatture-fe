import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../services/invoices/invoice.service';

@Component({
  selector: 'app-dettaglio-fattura',
  templateUrl: './dettaglio-fattura.component.html',
  styleUrls: ['./dettaglio-fattura.component.css'],
})
export class DettaglioFatturaComponent implements OnInit {
  invoice: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    const invoice_number = this.route.snapshot.paramMap.get('invoice_number');
    if (invoice_number !== null) {
      this.invoiceService
        .getInvoiceById(parseInt(invoice_number))
        .then((data) => {
          this.invoice = data;
        });
    }
  }

  updateSDIIdentifier(): void {
    const id = this.invoice.invoice_number;
    const sdiIdentifier = this.invoice.sdi_identifier;

    this.invoiceService.updateSDIIdentifier(id, sdiIdentifier).then((data) => {
      console.log('SDI Identifier updated successfully');
      this.navigateToHome();
    });
  }

  navigateToHome(): void {
    this.router.navigate(['/elenco-fatture']);
  }
}
