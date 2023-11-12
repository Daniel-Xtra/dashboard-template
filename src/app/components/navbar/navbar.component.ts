import { Component, OnInit } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { ROUTES } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public focus: any;
  public listTitles: any;
  public location: Location;
  info: any;
  constructor(location: Location) {
    this.location = location;
  }
  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    let toggle = document.querySelector('.toggle') as HTMLElement;
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.onclick = function () {
      navigation.classList.toggle('active');
      main.classList.toggle('active');
    };
    // let list = document.querySelectorAll('.navigation li');
    // function activeLink() {
    //   list.forEach((item) => item.classList.remove('hovered'));
    //   this.classList.add('hovered');
    // }
    // list.forEach((item) => item.addEventListener('mouseover', activeLink));
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
}
