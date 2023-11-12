import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // let toggle = document.querySelector('.toggle') as HTMLElement;
    // let navigation = document.querySelector('.navigation');
    // let main = document.querySelector('.main');
    // toggle.onclick = function () {
    //   navigation.classList.toggle('active');
    //   main.classList.toggle('active');
    // };
    // let list = document.querySelectorAll('.navigation li');
    // function activeLink() {
    //   list.forEach((item) => item.classList.remove('hovered'));
    //   this.classList.add('hovered');
    // }
    // list.forEach((item) => item.addEventListener('mouseover', activeLink));
  }
}
