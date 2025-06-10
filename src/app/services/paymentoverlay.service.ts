import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentoverlayService {
  private overlayVisible = new BehaviorSubject<boolean>(false);
  overlayVisible$ = this.overlayVisible.asObservable();

  private overlaymycash = new BehaviorSubject<boolean>(false);
  overlaymycash$ = this.overlaymycash.asObservable();



  show() {
    this.overlayVisible.next(true);
  }

  hide() {
    this.overlayVisible.next(false);
  }
  
  showmycash(){
    this.overlaymycash.next(true)
  }

  hidemycash(){
    this.overlaymycash.next(false)
  }
  constructor() {}
}
