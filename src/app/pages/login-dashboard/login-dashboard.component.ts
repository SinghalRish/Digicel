import { Component } from '@angular/core';
import { LoginheaderComponent } from '../../shared/loginheader/loginheader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-dashboard',
  imports: [LoginheaderComponent, CommonModule],
  templateUrl: './login-dashboard.component.html',
  styleUrl: './login-dashboard.component.css',
})
export class LoginDashboardComponent {
  isactiveplan = false;
  isexhausted = false;
  toggle() {
    if (this.isactiveplan) {
      this.isactiveplan = false;
      if (this.isexhausted) {
        this.isexhausted = false;
      } 
      else {
        this.isexhausted = true;
      }
    } 
    else if (!this.isexhausted) {
      this.isactiveplan = true;
    } 
    else {
      this.isexhausted = false;
    }
  }
}
