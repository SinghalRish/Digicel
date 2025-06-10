import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-paypal',
  imports: [RouterLink],
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.css',
})
export class PaypalComponent {
  constructor(private layout: LayoutService) {}
  toggle() {
    this.layout.show();
  }
}
