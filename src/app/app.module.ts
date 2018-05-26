import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MostPopularProductComponent } from './most-popular-product/most-popular-product.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { JQueryComponent } from '../assets/js/jquery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    MainSliderComponent,
    MostPopularProductComponent,
    TestimonialsComponent,
    FooterComponent,
    JQueryComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
