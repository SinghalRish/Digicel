import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TongaComponent } from './tonga.component';

describe('TongaComponent', () => {
  let component: TongaComponent;
  let fixture: ComponentFixture<TongaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TongaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TongaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
