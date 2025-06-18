import { Component } from '@angular/core';
import { LoginheaderComponent } from '../../shared/loginheader/loginheader.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-login-dashboard',
  imports: [LoginheaderComponent, CommonModule, NgClass],
  templateUrl: './login-dashboard.component.html',
  styleUrl: './login-dashboard.component.css',
})
export class LoginDashboardComponent {
  isactiveplan = false;
  isexhausted = false;
  isdata = true;
  issms = false;
  isvoice = false;
  totaldata = 10;
  remaineddata = 6;

  toggle() {
    if (this.isactiveplan) {
      this.isactiveplan = false;
      if (this.isexhausted) {
        this.isexhausted = false;
      } else {
        this.isexhausted = true;
      }
    } else if (!this.isexhausted) {
      this.isactiveplan = true;
    } else {
      this.isexhausted = false;
    }
  }
  todata() {
    this.isdata = true;
    this.issms = false;
    this.isvoice = false;
  }
  tovoice() {
    this.isdata = false;
    this.issms = false;
    this.isvoice = true;
  }
  tosms() {
    this.isdata = false;
    this.issms = true;
    this.isvoice = false;
  }
  // Assume values change dynamically
  color1 = 'green';
  color2 = 'gray';
  
  percentage = ((this.remaineddata / this.totaldata) * 100).toFixed(1); 

  getBorderGradient() {
    return `conic-gradient(${this.color1} 0% ${this.percentage}%, ${this.color2} ${this.percentage}% 100%)`;
  }
}
