import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/config/environment.dev';
import { Fattura } from 'src/app/models/fattura.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  async getInvoices(): Promise<Fattura[]> {
    return new Promise<Fattura[]>((resolve, reject) => {
      this.http
        .get<Fattura[]>(`${environment.api}/invoices/`, {
          headers: this.authService.getAuthorizationHeader(),
        })
        .subscribe(
          (data: Fattura[]) => {
            resolve(data);
          },
          (error: any) => {
            console.error('Error fetching invoices:', error);
            reject(error);
          }
        );
    });
  }

  async getInvoiceById(id: number): Promise<Fattura> {
    return new Promise<Fattura>((resolve, reject) => {
      this.http
        .get<Fattura>(`${environment.api}/invoices/invoice_number/${id}/`, {
          headers: this.authService.getAuthorizationHeader(),
        })
        .subscribe(
          (data: Fattura) => {
            resolve(data);
          },
          (error) => {
            console.error('Error fetching invoice by ID:', error);
            reject(error);
          }
        );
    });
  }

  async addInvoice(body: any): Promise<Fattura> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(`${environment.api}/invoices/`, body, {
          headers: this.authService.getAuthorizationHeader(),
        })
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            console.error('Error adding invoice:', error);
            reject(error);
          }
        );
    });
  }

  async uploadInvoiceXML(
    invoice_number: number,
    file: File | undefined
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (file) {
        const formData = new FormData();
        formData.append('xml_file', file);

        this.http
          .post(
            `${environment.api}/invoices/xml/invoice_number/${invoice_number}/`,
            formData,
            {
              headers: this.authService.getAuthorizationHeader(),
            }
          )
          .subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              console.error('Error uploading file:', error);
              reject(error);
            }
          );
      }
    });
  }

  async getInvoiceXML(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(`${environment.api}/invoices/xml/invoice_number/${id}/`, {
          headers: this.authService.getAuthorizationHeader(),
        })
        .subscribe(
          (xmlData: any) => {
            const blob = new Blob([xmlData], { type: 'application/xml' });
            const url = window.URL.createObjectURL(blob);
            window.open(url, '_blank');

            resolve(url);
          },
          (error) => {
            console.error('Error fetching invoice by ID:', error);
            reject(error);
          }
        );
    });
  }

  async updateSDIIdentifier(id: number, sdiIdentifier: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .patch(
          `${environment.api}/invoices/invoice_number/${id}/`,
          {
            sdi_identifier: sdiIdentifier,
          },
          {
            headers: this.authService.getAuthorizationHeader(),
          }
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            console.error('Error updating SDI identifier:', error);
            reject(error);
          }
        );
    });
  }
}
