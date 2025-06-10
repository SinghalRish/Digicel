import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private layoutVisible = new BehaviorSubject<boolean>(true);
  layoutVisible$ = this.layoutVisible.asObservable();
  constructor() {}
  hide() {
    this.layoutVisible.next(false);
  }
  show(){
    this.layoutVisible.next(true)
  }
}
