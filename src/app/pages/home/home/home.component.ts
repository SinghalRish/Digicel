import { Component } from '@angular/core';
import { Card_data } from '../../../Models/interface';
import { CardComponent } from '../../../shared/card/card/card.component';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // ngOninit(): void{
  //   Aos.init()
  // }
  Card_data: Card_data[] = [
    {
      title: 'MANAGE PLANS',
      description: 'Switch, activate, or add for you and your loved ones.',
      url: 'Bill.svg',
      hoverUrl: 'plans.svg',
    },
    {
      title: 'BILL PAYMENT',
      description: 'Pay bill through our secure and system.',
      url: 'Bill.svg',
      hoverUrl: 'biil2.svg',
    },
    {
      title: 'Past Invoices',
      description: 'Super quick way to get your invoices.',
      url: 'Invoices.svg',
      hoverUrl: 'invoice2.svg',
    },
    {
      title: 'Track Usages',
      description: 'Get your data usage at a glance.',
      url: 'Track.svg',
      hoverUrl: 'track2.svg',
    },
    {
      title: 'Check Balances',
      description:
        'Checking your data and credit balance is now faster and easier than ever before!',
      url: 'Check.svg',
      hoverUrl: 'Check.svg',
    },
    {
      title: 'Instant Help',
      description: 'Get assistance anytime and anywhere.',
      url: 'Help.svg',
      hoverUrl: 'help2.svg',
    },
  ];

}
