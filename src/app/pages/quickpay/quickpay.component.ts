import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { OverlayService } from '../../services/overlay.service';
import { PaymentoverlayService } from '../../services/paymentoverlay.service';
import { LayoutService } from '../../services/layout.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-quickpay',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './quickpay.component.html',
  styleUrl: './quickpay.component.css',
})
export class QuickpayComponent {
  isclicked: boolean = false;
  money = faMoneyCheck;
  constructor(
    private overlay: OverlayService,
    private payment: PaymentoverlayService,
    private layout: LayoutService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // getoverlay(){
  //   console.log("mycash clicked")
  //   this.overlay.showOverlay()
  // }
  getoverlay() {
    this.payment.showmycash();
    console.log('getoverlay called from my cash');
  }
  onsubmit() {
    this.isclicked = !this.isclicked;
  }
  onleave() {
    this.isclicked = !this.isclicked;
  }
  paypal() {
    if (this.router.url === '/paypal') {
      this.layout.hide();
    }
    this.router.navigate(['paypal']);
  }

  tonga() {
    if (this.router.url === '/tonga') {
      this.layout.hide();
    }
    this.router.navigate(['tonga']);
  }
}
