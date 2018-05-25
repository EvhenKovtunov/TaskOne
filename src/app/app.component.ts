import { Component, Testability } from '@angular/core';
declare var test: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  f(){
    new test();
  }
}
