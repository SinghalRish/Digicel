import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickpayComponent } from './quickpay.component';

describe('QuickpayComponent', () => {
  let component: QuickpayComponent;
  let fixture: ComponentFixture<QuickpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickpayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
