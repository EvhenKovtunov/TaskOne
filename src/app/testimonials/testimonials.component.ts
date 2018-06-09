import { Component, OnInit, ElementRef } from '@angular/core';
declare var test: any;


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {


  ngAfterViewInit(): void {
    this.loadScript('assets/js/slider.js');
  }

  public loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
   /* $(document).ready(function(){
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
      
    });*/
  }

 /* ngAfterViewInit() {
    var jquery = document.createElement("script");
    jquery.type = "text/javascript";
    jquery.src = "../assets/js/jquery.waterwheelCarousel.min.js";
    this._elementRef.nativeElement.appendChild(jquery);
  }*/

}
