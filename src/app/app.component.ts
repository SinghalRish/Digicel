import { Component, NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { NgFor, NgIf } from '@angular/common';
import { Country, OverlayService } from './services/overlay.service';
import { faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentoverlayService } from './services/paymentoverlay.service';
import { FormsModule, NgModel } from '@angular/forms';
import { LayoutService } from './services/layout.service';
import { filter } from 'rxjs';
import * as AOS from 'aos';
import { LoginheaderComponent } from './shared/loginheader/loginheader.component';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    NgIf,
    FontAwesomeModule,
    NgFor,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Digicel';
  isoverlay = false;
  isoverla = false;
  ismycash = false;
  ismycashnext = false;
  issuccess = false;
  isfailure = false;
  showlayout = false;
  faxmark = faXmark;
  countries: Country[] = [
    { name: 'Fiji', flagUrl: 'fj.png' },
    { name: 'Samoa', flagUrl: 'samoa.png' },
    { name: 'Papua New Guinea', flagUrl: 'papua.png' },
    { name: 'Vanuatu', flagUrl: 'v.png' },
    { name: 'Tonga', flagUrl: 'Tonga.png' },
    { name: 'Nauru', flagUrl: 'n.png' },
  ];

  constructor(
    private router: Router,
    private overlay: OverlayService,
    private paymentoverlayservice: PaymentoverlayService,
    private layoutservice: LayoutService
  ) {}

  ngOnInit() {
    AOS.init();
    this.paymentoverlayservice.overlaymycash$.subscribe((data) => {
      this.ismycash = data;
      // this.ismycash=data
      console.log(data + 'mycash');
    });
    this.paymentoverlayservice.overlayVisible$.subscribe((data) => {
      this.issuccess = data;
      // this.ismycash=data
      console.log(data);
    });
    if (this.router.url === '/paypal') {
      this.layoutservice.hide();
    }
    if (this.router.url === '/tonga') {
      this.layoutservice.hide();
    }
    this.layoutservice.layoutVisible$.subscribe((data) => {
      // console.log(data);
      this.showlayout = data;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects === '/paypal') {
          this.layoutservice.hide();
        } else if (event.urlAfterRedirects === '/tonga') {
          this.layoutservice.hide();
        } else if(event.urlAfterRedirects === '/login'){
          this.layoutservice.hide();
        }else{
          this.layoutservice.show()
        }
      });

    const selectedCountry = localStorage.getItem('country');

    if (!selectedCountry) {
      this.overlay.showOverlay();
    }
    this.overlay.overlayState$.subscribe((value) => {
      this.isoverlay = value;
    });
    // this.paymentoverlayservice.overlayVisible$.subscribe((value) => {
    //   this.ismycash = value;
    // });
  }
  otpLength = 6;
  otpArray = Array(this.otpLength).fill(0);
  otp: string[] = Array(this.otpLength).fill('');

  moveToNext(event: any, index: number) {
    const input = event.target;
    if (input.value && index < this.otpLength - 1) {
      const nextInput = input.nextElementSibling;
      nextInput?.focus();
    }
  }
  moveToPrev(event: any, index: number) {
    const input = event.target;
    if (!input.value && index > 0) {
      const prevInput = input.previousElementSibling;
      prevInput?.focus();
    }
  }
  getOtp(): string {
    return this.otp.join('');
  }
  selectCountry(country: Country) {
    this.overlay.setSelectedCountry(country);
    this.overlay.hideOverlay();
    this.router.navigate(['/home']);
  }
  changeoverlay() {
    this.overlay.hideOverlay();
  }
  toggleoverlay() {
    this.paymentoverlayservice.hide();
    this.ismycash=false
  }
  movenext() {
    console.log('movenext from mycash1 caleed');
    this.paymentoverlayservice.hide();
    this.ismycashnext = true;
    // this.ismycash = false;
    this.paymentoverlayservice.hidemycash();
  }
  toggleoverlaynext() {
    this.ismycashnext = false;
  }
  success() {
    this.ismycashnext = false;
    console.log(this.getOtp())
    this.paymentoverlayservice.show();

    // this.issuccess = true;
    // this.paymentoverlayservice.hide()
  }
  togglesuccess() {
    this.issuccess = false;
  }
  failure() {
    this.isfailure = true;
    this.issuccess = false;
  }

  togglefailure() {
    this.paymentoverlayservice.hide();
    this.isfailure = false;
    this.issuccess = false;
    this.router.navigate(['/quickpay']);
  }
}
