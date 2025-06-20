import { Component } from '@angular/core';
import { faCoffee, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { Country, OverlayService } from '../../../services/overlay.service';
import { NgClass } from '@angular/common';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink],
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
  constructor(private overlay: OverlayService, public router: Router,private layout:LayoutService) {}
  getoverlay() {
    this.overlay.showOverlay();
  }
  login() {
    this.router.navigate(['/login']);
  }
  movetodownload() {
    if (this.router.url === '/home') {
      const element = document.getElementById('download');
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (this.router.url === '/quickpay') {
        const element = document.getElementById('download_quickpay');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
}
