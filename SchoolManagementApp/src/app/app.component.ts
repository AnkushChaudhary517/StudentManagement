import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public show = false;
   onClick() {
    console.log('onclick');
    this.show = true;
  }
  ngOnInit() {}
}
