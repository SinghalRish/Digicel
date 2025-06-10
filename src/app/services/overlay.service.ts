import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
export interface Country {
  name: string;
  flagUrl: string;
}
@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private overlaySubject = new BehaviorSubject<boolean>(false);
  overlayState$ = this.overlaySubject.asObservable();
  constructor(private router: Router) {
    const countryData = localStorage.getItem('country');
    if (countryData) {
      try {
        const parsedCountry: Country = JSON.parse(countryData);
        this.selectedCountrySubject.next(parsedCountry);
      } catch (error) {
        console.error('Failed to parse stored country:', error);
        this.selectedCountrySubject.next({
          name: 'Select Country',
          flagUrl: '',
        });
      }
    }
  }

  private selectedCountrySubject = new BehaviorSubject<Country>({
    name: 'Select Country',
    flagUrl: '',
  });
  selectedCountry$ = this.selectedCountrySubject.asObservable();
  setSelectedCountry(country: Country) {
    this.selectedCountrySubject.next(country);
    localStorage.setItem('country', JSON.stringify(country)); 
  }

  getSelectedCountry(): Country {
    return this.selectedCountrySubject.getValue();
  }
  showOverlay() {
    // console.log("called due to mycash")
    this.overlaySubject.next(true);
  }

  hideOverlay() {
    this.overlaySubject.next(false);
  }
}
