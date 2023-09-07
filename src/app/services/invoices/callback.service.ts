import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CallbackService {
  constructor(private http: HttpClient) {}

  sendNotification(data: any) {
    return this.http.post('/api/callback/', data);
  }
}
