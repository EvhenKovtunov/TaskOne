import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;
declare var test: any;
declare var $: any;
import * as $ from "jquery";
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
    $(document).ready(function(){
      var carousel=$(".carousel").waterwheelCarousel({
        flankingItems:3
      });
      $("#prev").bind("click",function(){
        carousel.prev();
        return false;
      });
      $("#next").bind("click",function(){
        carousel.next();
        return false;
      });
      
    });
  }

  ngAfterViewInit() {
    var jquery = document.createElement("script");
    jquery.type = "text/javascript";
    jquery.src = "../assets/js/jquery.waterwheelCarousel.min.js";
    this._elementRef.nativeElement.appendChild(jquery);
  }

}
