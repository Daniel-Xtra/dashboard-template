import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageComponent } from './layouts/page/page.component';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TradingComponent } from './pages/trading/trading.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoaderComponent } from './partials/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    PageComponent,
    DashboardComponent,
    TradingComponent,
    WalletComponent,
    SettingsComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
