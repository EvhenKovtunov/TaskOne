import { Component, OnInit, ElementRef,ChangeDetectorRef, Renderer, ViewChild } from '@angular/core';
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
  }
}
