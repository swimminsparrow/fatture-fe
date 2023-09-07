import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/config/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Promise<any> {
    const headers = new HttpHeaders({
      Authorization: environment.secret,
    });

    const formData = new FormData();

    // Append the grant_type, username, and password fields to the FormData
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);

    return this.http
      .post(`${environment.host}/o/token/`, formData, { headers })
      .toPromise()
      .then((response: any) => {
        const accessToken = response.access_token;
        console.log(response);

        localStorage.setItem('access_token', accessToken);
        return response;
      });
  }

  getAuthorizationHeader(): HttpHeaders {
    const accessToken = this.getAccessToken();

    // Ensure that an access token exists in localStorage
    if (accessToken) {
      // Define the headers with the Bearer token
      console.log(accessToken);
      return new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      });
    } else {
      console.error('Access token not found in localStorage');
    }
    return new HttpHeaders({});
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
