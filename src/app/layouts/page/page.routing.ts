import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { TradingComponent } from 'src/app/pages/trading/trading.component';
import { WalletComponent } from 'src/app/pages/wallet/wallet.component';

export const PageRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'trading',
    component: TradingComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
