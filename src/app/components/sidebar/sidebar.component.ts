import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/logo',
    title: 'Paypal',
    icon: 'fa fa-paypal',
    class: '',
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'fa fa-th-large',
    class: '',
  },

  {
    path: '/trading',
    title: 'Trading',
    icon: 'fa fa-line-chart',
    class: '',
  },
  {
    path: '/wallet',
    title: 'Wallet',
    icon: 'fa fa-credit-card-alt',
    class: '',
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: 'fa fa-cog',
    class: '',
  },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public menuItems!: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
