import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  login() {
    this.authService.login(this.username, this.password).then(
      (response: any) => {
        this.snackBar
          .open('Logged in successfully', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          })
          .afterDismissed()
          .subscribe(() => {
            this.navigateToHome();
          });
      },
      (error) => {
        alert('Login ERROR');
      }
    );
  }
  onSubmit(): void {
    this.login();
  }

  navigateToHome(): void {
    this.router.navigate(['elenco-fatture']);
  }
}
