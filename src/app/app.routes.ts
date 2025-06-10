import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { QuickpayComponent } from './pages/quickpay/quickpay.component';
import { PaypalComponent } from './pages/paypal/paypal/paypal.component';
import { TongaComponent } from './pages/tonga/tonga.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'quickpay',
    component: QuickpayComponent,
  },
  {
    path: 'paypal',
    component: PaypalComponent,
  },
   {
    path: 'tonga',
    component: TongaComponent,
  },
   {
    path: 'login',
    component: LoginComponent,
  },
];
