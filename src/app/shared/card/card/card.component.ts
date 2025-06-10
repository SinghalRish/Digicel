import { Component, Input } from '@angular/core';
import { Card_data } from '../../../Models/interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() card_data!: Card_data;
  hover: boolean = false;

  onMouseEnter() {
    this.hover = true;
  }

  onMouseLeave() {
    this.hover = false;
  }
}
