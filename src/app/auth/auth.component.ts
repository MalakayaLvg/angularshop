import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password);
  }

  login() {
    this.authService.login(this.email, this.password);
  }

  logout() {
    this.authService.logout();
  }
}
