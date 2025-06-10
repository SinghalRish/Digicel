import { Component } from '@angular/core';
import { faCoffee, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { Country, OverlayService } from '../../../services/overlay.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faangledown = faAngleDown;
  selectedCountry!: Country;

  ngOnInit() {
    this.overlay.selectedCountry$.subscribe((country) => {
      this.selectedCountry = country;
    });
  }
  constructor(private overlay: OverlayService , public router :Router) {}
  getoverlay() {
    this.overlay.showOverlay();
  }
  login(){
    this.router.navigate(['/login'])
  }
}
