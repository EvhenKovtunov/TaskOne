import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-popular-product',
  templateUrl: './most-popular-product.component.html',
  styleUrls: ['./most-popular-product.component.scss']
})
export class MostPopularProductComponent  {
  items: Array<any> = []
  constructor() { 
    this.items = [
      { name: '../assets/img/testImageOne.png' ,labelNam:"Hubstaff Directory"},
      { name: '../assets/img/testImageTwo.png' ,labelNam:"Jira 2017"},
      { name: '../assets/img/testImageThree.png' ,labelNam:"Slack Pro"},
      { name: '../assets/img/testImageFour.png' ,labelNam:"Trave Chat"},
      { name: '../assets/img/testImageFive.png' ,labelNam:"Network"},
      { name: '../assets/img/testImageSix.png' ,labelNam:"Time Camp"},
    ]

   
  }

  

}
