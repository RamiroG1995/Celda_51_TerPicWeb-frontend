import { Component, OnInit } from '@angular/core';
//import $ from "jquery";
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
    $('.bxslider').bxSlider({
      mode: 'fade',
      speed: 1000,
      slideMargin: 0,
      captions: false,
      slideWidth: 1600,
      auto: true,
      autoControls: false,
      stopAutoOnClick: false,
      pager: true,
      controls: false

    });

  }

}
