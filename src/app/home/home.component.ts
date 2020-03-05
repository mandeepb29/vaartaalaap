import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselOptions = {
    margin: 25,
    nav: true,
    dots:false,
    items: 1,
    stagePadding: 0,
    navText: ['<img src="assets/images/icons/prev.svg" style="width:30px;">', '<img src="assets/images/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
   
  }

  constructor() { }

  ngOnInit() {
  }

}
