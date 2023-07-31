import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(){
    console.log("hello from app");
    sessionStorage.setItem("home","true");
    sessionStorage.setItem("about","false");
    sessionStorage.setItem("portfolio","false");
    sessionStorage.setItem("reach","false");
  }
}
