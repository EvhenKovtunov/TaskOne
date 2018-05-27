import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var test: any;
declare var $: any;
import * as $ from "jquery";
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  public ngOnInit() {

    $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  }

}
