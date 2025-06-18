import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMoneyCheck,
  faCalendarDay,
  faLock,
  faUser,
  faEnvelope,
  faPhone,
  faL,
} from '@fortawesome/free-solid-svg-icons';
import { LayoutService } from '../../services/layout.service';
import { Router } from '@angular/router';
import { PaymentoverlayService } from '../../services/paymentoverlay.service';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-tonga',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './tonga.component.html',
  styleUrl: './tonga.component.css',
})
export class TongaComponent {
  constructor(
    private layou: LayoutService,
    private route: Router,
    private payment: PaymentoverlayService
  ) {}
  money = faMoneyCheck;
  calendar = faCalendarDay;
  lock = faLock;
  user = faUser;
  email = faEnvelope;
  phone = faPhone;
  issidebar = false;
  toggle() {
    this.layou.show();
    this.route.navigate(['/quickpay']);
  }
  pay() {
    this.payment.show();
  }
  opensidebar() {
    if (this.issidebar == false) {
      this.issidebar = true;
    } else {
      this.issidebar = false;
    }
  }
}
