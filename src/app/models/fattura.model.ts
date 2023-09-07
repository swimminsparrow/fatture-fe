export interface Fattura {
  invoice_number: number;
  sdi_identifier: string;
  issue_date: string;
  due_date: string;
  emitter_full_name: string;
  emitter_email: string;
  destination_full_name: string;
  destination_email: string;
  total_amount: number;
  status: string;
  emitter_user: number;
  destination_user: number;
  xml_file: string;
}
